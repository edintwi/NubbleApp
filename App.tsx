
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import {theme} from './src/theme/theme'

function App(): JSX.Element {
  
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 24}}>
      <Text preset="headingLarge" italic>
        CoffStack
      </Text>
      <Button disabled title='Entrar' preset='primary' marginBottom='s12'/>
      <Button disabled title='Entrar' preset='outline'/>

    </SafeAreaView>
    </ThemeProvider>
  );
  
}


export default App;
