import { useNavigation } from "@react-navigation/native";
import { RootStackPraramList } from "../routes/Routes";

export function useResetNavigationSucess(){
    const navigation = useNavigation();

    function reset(params: RootStackPraramList['SucessScreen'] ){
        navigation.reset({
            index: 1,
            routes: [
              {
               name: 'LoginScreen',
              },
              {
                name: 'SucessScreen',
                params,
              }
            ],
          });
    }

    return {reset};
};
