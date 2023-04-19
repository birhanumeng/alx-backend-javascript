import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photoObj;
  let userObj;

  try {
    photoObj = await uploadPhoto();
    userObj = await createUser();
  } catch (error) {
    photoObj = null;
    userObj = null;
  }
  const result = {
    photo: photoObj,
    user: userObj
  };

  return result;
}
