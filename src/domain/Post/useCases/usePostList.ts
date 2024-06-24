import {Post, postService} from '@domain';
import {queryKeys, usePaginatedList} from '@infra';
export function usePostList() {
  return usePaginatedList<Post>([queryKeys.PostList], postService.getList);
}
