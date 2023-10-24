import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  canGoback?: boolean;
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoback = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoback && (
            <TouchableOpacityBox
              onPress={() => navigation.goBack()}
              flexDirection="row"
              mb="s24">
              <Icon name="arrowLeft" color="primary" />
              <Text semiBold preset="paragraphMedium" ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
