import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, SettingsScreen} from '@screens';

export type AppStackRootParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};
const Stack = createStackNavigator<AppStackRootParamList>();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
