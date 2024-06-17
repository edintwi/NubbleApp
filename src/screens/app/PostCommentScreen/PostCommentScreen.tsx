import React from 'react';

import {Screen} from '@components';
import {usePostCommentList} from '@domain';
import {AppScreenProps} from '@routes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostComment} from 'src/domain/PostComment/postCommentTypes';
import PostCommentItem from './components/PostCommentItem';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }
  return (
    <Screen canGoback title="Comentários">
      <FlatList data={list} renderItem={renderItem} />
    </Screen>
  );
}
