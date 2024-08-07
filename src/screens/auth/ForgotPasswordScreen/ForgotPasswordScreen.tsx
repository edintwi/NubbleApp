import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSucess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {useAuthRequestNewPassword} from '@domain';
import {useToastService} from '@services';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSucess();
  const {showToast} = useToastService();
  const {isLoading, requestNewPassword} = useAuthRequestNewPassword({
    onSucess: () => {
      reset({
        title: `Enviamos as ${'\n'}instruções para seu ${'\n'}e-mail`,
        description:
          'Clique no link enviado no seu  e-mail para recuperar sua senha',
        icon: {
          name: 'messageRound',
          color: 'greenPrimary',
        },
      });
    },
    onError: message => {
      showToast({message, type: 'error'});
    },
  });

  function submitForm(values: ForgotPasswordSchema) {
    requestNewPassword(values.email);
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
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        mt="s48"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
