import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  return postListMock;
}

export const postApi = {
  getList,
};
