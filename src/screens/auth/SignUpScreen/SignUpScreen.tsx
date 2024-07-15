import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSucess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {useAuthIsUsernameAvailable, useAuthSignUp} from '@domain';
import {SignUpSchema, signUpSchema} from './signUpSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {isLoading, signUp} = useAuthSignUp({
    onSucess: () => {
      reset({
        title: 'Sua conta foi criada com sucesso!',
        description: 'Agora é so fazer login na nossa plataforma',
        icon: {
          name: 'checkRoundIcon',
          color: 'greenSuccess',
        },
      });
    },
  });

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      defaultValues: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      mode: 'onChange',
      resolver: zodResolver(signUpSchema),
    });

  const {reset} = useResetNavigationSucess();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });
  return (
    <Screen canGoback scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        errorMsg={
          usernameQuery.isUnavailable ? 'Username insdísponivel' : undefined
        }
        placeholder="@"
        boxProps={{mb: 's20'}}
        RightComponent={
          usernameQuery.isFetching ? (
            <ActivityIndicator size={'small'} />
          ) : undefined
        }
      />
      <FormTextInput
        control={control}
        name="firstName"
        label="Primeiro nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
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
        disabled={
          !formState.isValid ||
          usernameQuery.isFetching ||
          usernameQuery.isUnavailable
        }
        title="Criar minha conta"
        preset="primary"
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
