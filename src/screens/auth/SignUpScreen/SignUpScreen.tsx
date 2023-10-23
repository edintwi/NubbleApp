import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

import {RootStackPraramList} from '../../../routes/Routes';
import {StackScreenProps} from '@react-navigation/stack';

import {useResetNavigationSucess} from '../../../hooks/useResetNavigationSucess';
import {useForm, Controller} from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';


type ScreenProps = StackScreenProps<RootStackPraramList, 'SignUpScreen'>;

type SignUpFormType = {
  userName: string;
  fullName: string;
  email: string;
  password: string;
};

export function SignUpScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSucess();

  function submitForm(formValues: SignUpFormType) {
    
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
        rules={{required: 'Nome de usuário é obrigatório'}}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        rules={{required: 'Nome completo é obrigatório'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            onChangeText={field.onChange}
            value={field.value}
            errorMsg={fieldState.error?.message}
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's48'}}
          />
        )}
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
