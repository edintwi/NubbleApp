import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PostCommentScreen(props: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen canGoback title="Comentários">
      <Box>
        <Text>Comentários</Text>
      </Box>
    </Screen>
  );
}
