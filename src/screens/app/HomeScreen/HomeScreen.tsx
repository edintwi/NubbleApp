import React from 'react';

import {Screen, Text, Button} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Configurações"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
