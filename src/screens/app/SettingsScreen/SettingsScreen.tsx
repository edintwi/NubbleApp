import React from 'react';

import {Button, Screen} from '@components';
import {useAuthSignOut} from '@domain';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  const {signOut, isLoading} = useAuthSignOut();

  return (
    <Screen canGoback title="Configurações">
      <Button title="Sair da conta" onPress={signOut} loading={isLoading} />
    </Screen>
  );
}
