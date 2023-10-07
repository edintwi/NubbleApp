
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import {theme} from './src/theme/theme';

import { Icon } from './src/components/Icon/Icon';
import { Box } from './src/components/Box/Box';


function App(): JSX.Element {
  
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 24}}>
      <Text preset="headingLarge" italic>
        CoffStack
      </Text>
      <Box flexDirection='row' gap='s12'>
        <Icon name='eyeOn' color='error'/>
        <Icon name='eyeOff' color='buttonPrimary'/>
      </Box>

    </SafeAreaView>
    </ThemeProvider>
  );
  
}


export default App;
