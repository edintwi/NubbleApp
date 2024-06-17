import React from 'react';

import {Box, Screen, TextMessage} from '@components';
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

  const [message, setMessage] = React.useState('');

  const {bottom} = useAppSafeArea();
  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  function onPressSend() {}
  return (
    <Screen flex={1} title="Comentários" canGoback>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
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
        <TextMessage
          placeholder="Adicione um comentário"
          onPressSend={onPressSend}
          value={message}
          onChangeText={setMessage}
        />
      </Box>
    </Screen>
  );
}
