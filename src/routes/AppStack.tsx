import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SettingsScreen} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackRootParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
};
const Stack = createStackNavigator<AppStackRootParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
