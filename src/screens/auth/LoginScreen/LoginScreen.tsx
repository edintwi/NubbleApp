import React from 'react';

import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import { Text } from '../../../components/Text/Text';
import { RootStackPraramList } from '../../../routes/Routes';
import {StackScreenProps} from '@react-navigation/stack'

type ScreenProps = StackScreenProps<RootStackPraramList, 'LoginScreen'>;

export function LoginScreen({navigation} : ScreenProps) {
  
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        boxProps={{mb: 's20'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />
      <Text color="primary" preset="paragraphSmall" bold onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
