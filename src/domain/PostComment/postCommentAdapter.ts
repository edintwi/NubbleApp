import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentAPI: PostCommentAPI): PostComment {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    created_at: postCommentAPI.created_at,
    author: {
      id: postCommentAPI.user.id,
      userName: postCommentAPI.user.username,
      name: postCommentAPI.user.full_name,
      profileURL: postCommentAPI.user.profile_url,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
