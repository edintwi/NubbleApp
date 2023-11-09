import {IconProps} from '@components';

import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocus: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocus: 'home',
    },
  },
  NewPostScreeen: {
    label: 'Novo Post',
    icon: {
      focused: 'newPost',
      unfocus: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unfocus: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu Perfil',
    icon: {
      focused: 'profileFill',
      unfocus: 'profile',
    },
  },
};
