import {Box, ProfileAvatar, Text} from '@components';
import React from 'react';

import {PostComment} from 'src/domain/PostComment/postCommentTypes';

interface Props {
  postComment: PostComment;
}
export default function PostCommentItem({postComment}: Props) {
  return (
    <Box mb="s20" flexDirection="row" alignItems="center" marginBottom="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12">
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message}
        </Text>
      </Box>
    </Box>
  );
}
