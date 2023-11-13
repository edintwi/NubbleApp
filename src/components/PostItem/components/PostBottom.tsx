import React from 'react';

import {Post} from '@domain';

import {Text, Box} from '@components';

type Props = Pick<Post, 'author' | 'commentCount' | 'text'>;

export function PostBottom({author, text, commentCount}: Props) {
  let commentText = getCommentText(commentCount);
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <Text mt="s8" preset="paragraphSmall" bold color="primary">
        {commentText}
      </Text>
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
