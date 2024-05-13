import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'commentCount' | 'text' | 'id'>;

export function PostBottom({author, text, commentCount, id}: Props) {
  let commentText = getCommentText(commentCount);

  const navigation = useNavigation();
  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
    });
  }
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <Text
        onPress={navigateToPostCommentScreen}
        mt="s8"
        preset="paragraphSmall"
        bold
        color="primary">
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
