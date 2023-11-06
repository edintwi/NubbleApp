import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {useResetNavigationSucess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
