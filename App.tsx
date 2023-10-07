
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
      <Box flexDirection="row">
            <Icon name="chevronRight" size={50} />
            <Icon name="heartFill" color="buttonPrimary" />
            <Icon name="profile" size={50} />
            <Icon name="profileFill" size={50} />
            <Icon name="heart" size={50} />
            <Icon name="bellOn" color="carrotSecondary" size={50} />
          </Box>
          <Box flexDirection="row">
            <Icon name="newPost" size={50} />
            <Icon name="camera" size={50} />
            <Icon name="chat" size={50} />
            <Icon name="chatOn" color="error" size={50} />
            <Icon name="flashOff" size={50} />
            <Icon name="flashOn" size={50} />
          </Box>

    </SafeAreaView>
    </ThemeProvider>
  );
  
}


export default App;
