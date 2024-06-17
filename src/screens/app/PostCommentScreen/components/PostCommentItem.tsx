import {Box, Text} from '@components';
import React from 'react';

import {PostComment} from 'src/domain/PostComment/postCommentTypes';

interface Props {
  postComment: PostComment;
}
export default function PostCommentItem({postComment}: Props) {
  return (
    <Box mb="s20">
      <Text>{postComment.message}</Text>
    </Box>
  );
}
