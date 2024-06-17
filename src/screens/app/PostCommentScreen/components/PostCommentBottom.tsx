import {Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
export function PostCommentBottom({fetchNextPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text bold color="primary" textAlign="center">
          Ver mais
        </Text>
      </Pressable>
    );
  }
  return null;
}
