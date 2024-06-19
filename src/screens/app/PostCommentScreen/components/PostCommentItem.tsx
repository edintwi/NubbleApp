import {Box, ProfileAvatar, Text} from '@components';
import {postCommentService, usePostCommentRemove} from '@domain';
import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment} from 'src/domain/PostComment/postCommentTypes';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}
export default function PostCommentItem({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: Props) {
  const {mutate} = usePostCommentRemove({onSucess: onRemoveComment});

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o cometário?', 'Pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate(postComment.id),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }
  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
      <Box mb="s20" flexDirection="row" alignItems="center" marginBottom="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
