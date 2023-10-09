import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Icon} from '../../../components/Icon/Icon';
import {theme} from '../../../theme/theme';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';

export function LoginScreen() {
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
        errorMsg="mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
        RightComponent={<Icon name="eyeOn" color="gray2" />}
      />
      <Text color="primary" preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
}
