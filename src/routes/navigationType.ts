import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackRootParamList} from './AppStack';
import {AppTabBottomTabParamList} from './AppTabNavigator';
import {AuthStackPraramList} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackPraramList,
        AppStackRootParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackRootParamList> =
  NativeStackScreenProps<AppStackRootParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackPraramList> =
  NativeStackScreenProps<AuthStackPraramList, RouteName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackRootParamList, 'AppTabNavigator'>
>;
