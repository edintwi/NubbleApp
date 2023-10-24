import React from 'react';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';

import {RootStackPraramList} from '@routes';
import {StackScreenProps} from '@react-navigation/stack';

import {useResetNavigationSucess} from '@hooks';
import {useForm} from 'react-hook-form';

import {SignUpSchema, signUpSchema} from './signUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = StackScreenProps<RootStackPraramList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const {reset} = useResetNavigationSucess();

  function submitForm(formValues: SignUpSchema) {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é so fazer login na nossa plataforma',
      icon: {
        name: 'checkRoundIcon',
        color: 'greenSuccess',
      },
    });
  }
  return (
    <Screen canGoback scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="userName"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button
        disabled={!formState.isValid}
        title="Criar minha conta"
        preset="primary"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
