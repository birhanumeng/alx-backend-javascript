import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user_promise = {
    status: 'pending',
    value: '',
  };
  const photo_promise = {
    status: 'pending',
    value: '',
  };
  try {
    const signupUser = await signUpUser(firstName, lastName);
    user_promise.status = 'fulfilled';
    user_promise.value = signupUser;
  } catch (error) {
    user_promise.status = 'rejected';
    user_promise.value = error.toString();
  }
  try {
    const uploadPhoto = await uploadPhoto(fileName);
    photo_promise.status = 'fulfilled';
    photo_promise.value = uploadPhoto;
  } catch (error) {
    photo_promise.status = 'rejected';
    photo_promise.value = error.toString();
  }
  return [user_promise, photo_promise];
}
