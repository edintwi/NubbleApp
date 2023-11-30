import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://10.0.2.2:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer NQ.Ubst0pjK0n2KR6UD8BKWDLTnMP9pV2-FsASiAEAqXipya727wvwwFMlLf4jy',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  console.log(data);

  return data;
}

export const postApi = {
  getList,
};
