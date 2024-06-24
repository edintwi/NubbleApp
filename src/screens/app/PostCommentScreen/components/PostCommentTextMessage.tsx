import {TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';
import React from 'react';
import {Keyboard} from 'react-native';

interface Props {
  postId: number;
}
export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = React.useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSucess: () => {
      setMessage('');
      Keyboard.dismiss();
    },
  });

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={createComment}
      value={message}
      onChangeText={setMessage}
    />
  );
}
