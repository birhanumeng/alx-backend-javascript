import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userp = {
    status: 'pending ',
  };
  const photop = {
    status: 'pending ',
  };

  try {
    const signup = await signUpUser(firstName, lastName);
    userp.status = 'fulfilled';
    userp.value = signup;
  } catch (err) {
    userp.status = 'rejected';
    userp.value = err.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);
    photop.status = 'fulfilled';
    photop.value = upload;
  } catch (err) {
    photop.status = 'rejected';
    photop = err.toString();
  }

  return [userp, photop];
}
