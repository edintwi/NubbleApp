import {User, UserAPI} from './userTypes';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    email: userAPI.email,
    userName: userAPI.username,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    fullName: userAPI.full_name,
    isOnline: userAPI.is_online,
    profileUrl: userAPI.profile_url,
  };
}

export const userAdapter = {
  toUser,
};
