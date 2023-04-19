import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = {
    status: 'pending ',
  };
  const photoPromise = {
    status: 'pending ',
  };

  try {
    const signup = await signUpUser(firstName, lastName);
    userPromise.status = 'fulfilled';
    userPromise.value = signup;
  } catch (err) {
    userPromise.status = 'rejected';
    userPromise.value = err.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);
    photoPromise.status = 'fulfilled';
    photoPromise.value = upload;
  } catch (err) {
    photoPromise.status = 'rejected';
    photoPromise = err.toString();
  }

  return [userPromise, photoPromise];
}
