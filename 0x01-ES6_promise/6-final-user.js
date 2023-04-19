import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userP = {
    status: 'pending ',
  };
  const photoP = {
    status: 'pending ',
  };

  try {
    const signup = await signUpUser(firstName, lastName);
    userP.status = 'fulfilled';
    userP.value = signup;
  } catch (err) {
    userP.status = 'rejected';
    userP.value = err.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);
    photoP.status = 'fulfilled';
    photoP.value = upload;
  } catch (err) {
    photoP.status = 'rejected';
    photoP = err.toString();
  }

  return [userP, photoP];
}
