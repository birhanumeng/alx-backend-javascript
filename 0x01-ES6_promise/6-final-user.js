import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user_promise = {
    status: 'pending ',
  };
  const photo_promise = {
    status: 'pending ',
  };

  try {
    const signup = await signUpUser(firstName, lastName);
    user_promise.status = 'fulfilled';
    user_promise.value = signup;
  } catch (err) {
    user_promise.status = 'rejected';
    user_promise.value = err.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);
    photo_promise.status = 'fulfilled';
    photo_promise.value = upload;
  } catch (err) {
    photo_promise.status = 'rejected';
    photo_promise = err.toString();
  }

  return [user_promise, photo_promise];
}
