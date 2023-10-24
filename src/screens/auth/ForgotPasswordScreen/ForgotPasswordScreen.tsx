import React from 'react';
import {Text, Screen, Button, FormTextInput} from '@components';

import {RootStackPraramList} from '@routes';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import { useResetNavigationSucess } from '@hooks';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

type ScreenProps = StackScreenProps<
  RootStackPraramList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  });

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
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Button
        title="Recuperar senha"
        onPress={handleSubmit(submitForm)}
        mt="s48"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
