
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
      <SafeAreaView>
      <Text bold italic preset='headingLarge' style={{color: 'red'}}>
        CoffStack
      </Text>
      <Button title='Entrar'/>
    </SafeAreaView>
    </ThemeProvider>
  );
  
}


export default App;
