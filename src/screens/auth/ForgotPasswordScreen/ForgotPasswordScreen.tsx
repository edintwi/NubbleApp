import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {RootStackPraramList} from '../../../routes/Routes';
import {StackScreenProps} from '@react-navigation/stack';

import {useResetNavigationSucess} from '../../../hooks/useResetNavigationSucess';
type ScreenProps = StackScreenProps<
  RootStackPraramList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSucess();

  function submitForm() {
    //TODO

    reset({
      title: `Enviamos as ${'\n'}instruções para seu ${'\n'}e-mail`,
      description: `Clique no link enviado no seu  e-mail para recuperar sua senha`,
      icon: {
        name: 'messageRound',
        color: 'greenPrimary',
      },
    });
  }

  return (
    <Screen canGoback>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput label="E-mail" placeholder="Digite seu e-mail" />
      <Button title="Recuperar senha" onPress={submitForm} mt="s48" />
    </Screen>
  );
}
