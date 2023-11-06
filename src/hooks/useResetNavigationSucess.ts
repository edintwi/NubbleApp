import {useNavigation} from '@react-navigation/native';

import {AuthStackPraramList} from '@routes';

export function useResetNavigationSucess() {
  const navigation = useNavigation();

  function reset(params: AuthStackPraramList['SucessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SucessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
