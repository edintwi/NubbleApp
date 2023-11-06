import React from 'react';

import {Icon, Text, Button, Screen} from '@components';
import {AuthScreenProps} from '@routes';

export function SucessScreen({
  route,
  navigation,
}: AuthScreenProps<'SucessScreen'>) {
  function gotBackToBegin() {
    //todo
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button title={'Voltar ao inicio'} onPress={gotBackToBegin} mt="s40" />
    </Screen>
  );
}
