import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoback>
      <Text preset="headingSmall">Configurações</Text>
    </Screen>
  );
}
