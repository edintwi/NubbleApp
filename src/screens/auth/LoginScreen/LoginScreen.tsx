import React from 'react';

import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import { Text } from '../../../components/Text/Text';
import { RootStackPraramList } from '../../../routes/Routes';
import {StackScreenProps} from '@react-navigation/stack';

import {useForm, Controller}from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from 'react-native';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { LoginSchema, loginSchema } from './loginSchema';

type ScreenProps = StackScreenProps<RootStackPraramList, 'LoginScreen'>;

export function LoginScreen({navigation} : ScreenProps) {
  
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onChange',

  });

  function submitForm({email, password} : LoginSchema){
    Alert.alert(email, password);
  }
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
      <FormTextInput 
        control={control}
        name='email'
        boxProps={{mb: 's20'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <FormPasswordInput
        control={control}
        name='password'
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />
      <Text color="primary" preset="paragraphSmall" bold onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>
      <Button disabled={!formState.isValid}  marginTop="s48" title="Entrar" onPress={handleSubmit(submitForm)} />
      <Button
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
