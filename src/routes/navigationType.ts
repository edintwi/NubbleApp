import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackRootParamList} from './AppStack';
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
