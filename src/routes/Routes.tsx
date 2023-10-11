import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import { SucessScreen } from '../screens/auth/SucessScreen/SucessScreen';
import { IconProps } from '../components/Icon/Icon';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';

export type RootStackPraramList = {
    LoginScreen: undefined,
    SignUpScreen: undefined,
    ForgotPasswordScreen: undefined,
    SucessScreen: {
      title: string,
      description: string,
      icon: Pick<IconProps, 'name' | 'color' >,
    }
}

const Stack = createStackNavigator<RootStackPraramList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SucessScreen" component={SucessScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
