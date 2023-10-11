import React from 'react';

import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import { Text } from '../../../components/Text/Text';
import { RootStackPraramList } from '../../../routes/Routes';
import {StackScreenProps} from '@react-navigation/stack';

import {useForm, Controller}from 'react-hook-form';
import { Alert } from 'react-native';

type ScreenProps = StackScreenProps<RootStackPraramList, 'LoginScreen'>;

type LoginFormType = {
  email:string,
  password: string,
}

export function LoginScreen({navigation} : ScreenProps) {
  
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function submitForm({email, password} : LoginFormType){
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
      <Controller 
        control={control}
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        name='email'
        render={({field, fieldState}) => (
          <TextInput
          autoCapitalize='none'
          value={field.value}
          onChangeText={field.onChange}
          boxProps={{mb: 's20'}}
          errorMsg={fieldState.error?.message}
          label="E-mail"
          placeholder="Digite seu e-mail"
        />
        )}
      />
      <Controller
        control={control}
        name='password'
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres'
          }
        }}
        render={({field, fieldState}) => (
          <PasswordInput
          errorMsg={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{mb: 's10'}}
        />
        )}
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
