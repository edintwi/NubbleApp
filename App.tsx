import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';
import {TextInput} from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 24}}>
        <Text preset="headingLarge" mb="s8">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>
          <TextInput
            boxProps={{mb:'s20'}}
            errorMsg="mensagem de error"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <TextInput label="Senha" placeholder="Digite sua senha" boxProps={{mb: 's10'}} RightComponent={<Icon name='eyeOn' color='gray2'/>}/>
        <Text color="primary" preset="paragraphSmall">
          Esqueci minha senha
        </Text>
        <Button marginTop="s48" title="Entrar" />
        <Button preset="outline" marginTop="s12" title="Criar uma conta" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
