import React from 'react';
import { Icon } from '../../../components/Icon/Icon';
import { Box } from '../../../components/Box/Box';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackPraramList } from '../../../routes/Routes';

type ScreenProps = StackScreenProps<RootStackPraramList, 'SucessScreen'>;

export function SucessScreen({route, navigation} : ScreenProps){

    function gotBackToBegin(){
        //todo
        navigation.goBack();
    };

    return(
        <Screen>
            <Icon {...route.params.icon}/>
            <Text preset='headingLarge' mt='s24'>
                {route.params.title}
            </Text>
            <Text preset='paragraphLarge' mt='s16'>
                {route.params.description}
            </Text>
            <Button title={'Voltar ao inicio'} onPress={gotBackToBegin} mt='s40'/>
        </Screen>
    )
};