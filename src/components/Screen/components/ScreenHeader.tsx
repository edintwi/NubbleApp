import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScreenProps } from '../Screen';

type Props = Pick<ScreenProps, 'title' | 'canGoback'>

export default function ScreenHeader({title, canGoback} : Props) {

    const navigation = useNavigation();
  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      mb="s24">
      {canGoback && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={() => navigation.goBack()}>
          <Icon name="arrowLeft" color="primary" />
          {!title && (
            <Text semiBold preset="paragraphMedium" ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}

      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={20}></Box>}
    </Box>
  );
}