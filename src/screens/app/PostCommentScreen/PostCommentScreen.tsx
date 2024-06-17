import React from 'react';

import {Screen} from '@components';
import {usePostCommentList} from '@domain';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostComment} from 'src/domain/PostComment/postCommentTypes';
import {PostCommentBottom} from './components/PostCommentBottom';
import PostCommentItem from './components/PostCommentItem';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();
  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }
  return (
    <Screen canGoback title="Comentários">
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: bottom}}
        ListFooterComponent={
          <PostCommentBottom
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        }
      />
    </Screen>
  );
}
