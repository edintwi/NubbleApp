
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Text } from './src/components/Text/Text';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Text preset='headingLarge' style={{color: 'red', fontFamily: 'Satoshi-Black'}}>
        CoffStack
      </Text>
    </SafeAreaView>
  );
}


export default App;
