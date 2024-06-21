import {userAdapter} from './userAdapter';
import {userAPI} from './userApi';
import {User} from './userTypes';

async function getById(id: number): Promise<User> {
  const userApi = await userAPI.getById(id.toString());
  return userAdapter.toUser(userApi);
}

export const userService = {
  getById,
};
