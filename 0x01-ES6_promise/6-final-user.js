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
    user.status = 'fulfilled';
    user.value = signupUser;
  } catch (error) {
    user.status = 'rejected';
    user.value = error.toString();
  }
  try {
    const uploadPhoto = await uploadPhoto(fileName);
    photo.status = 'fulfilled';
    photo.value = uploadPhoto;
  } catch (error) {
    photo.status = 'rejected';
    photo.value = error.toString();
  }
  return [user_promise, photo_promise];
}
