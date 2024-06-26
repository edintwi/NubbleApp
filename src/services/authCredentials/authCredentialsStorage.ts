import {AuthCredentials} from 'src/domain/Auth/AuthTypes';
import {storage} from '../storage/storage';

const AUTH_KEY = '@Auth';

async function set(ac: AuthCredentials): Promise<void> {
  await storage.setItem(AUTH_KEY, ac);
}

async function get(): Promise<AuthCredentials | null> {
  const ac = await storage.getItem<AuthCredentials>(AUTH_KEY);
  return ac;
}

async function remove(): Promise<void> {
  await storage.removeItem(AUTH_KEY);
}
export const authCredentialsStorage = {
  set,
  get,
  remove,
};
