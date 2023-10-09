import React from 'react';

import { Screen } from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen(){

    function submitForm(){
        //TODO
    };
    return(
        <Screen canGoback scrollable>
            <Text preset='headingLarge' mb='s32'>
                Criar uma conta
            </Text>
            <TextInput label='Seu username' placeholder='@' boxProps={{mb: 's20'}}/>
            <TextInput label='Nome completo' placeholder='Digite seu nome completo' boxProps={{mb: 's20'}}/>
            <TextInput label='E-mail' placeholder='Digite seu e-mail' boxProps={{mb: 's20'}}/>
            <PasswordInput
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{mb: 's40'}}
            />

            <Button title='Criar minha conta' preset='primary' onPress={submitForm}/>
        </Screen>
    )
};