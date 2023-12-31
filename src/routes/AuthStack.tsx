import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {IconProps} from '@components';
import {
  LoginScreen,
  SignUpScreen,
  SucessScreen,
  ForgotPasswordScreen,
} from '@screens';

export type AuthStackPraramList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  SucessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};

const Stack = createStackNavigator<AuthStackPraramList>();
export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SucessScreen" component={SucessScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}
