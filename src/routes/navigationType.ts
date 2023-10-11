import {RootStackPraramList} from './Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackPraramList {}
  }
}