import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Box, BoxProps } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import ScreenHeader from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoback?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoback = false,
  scrollable = false,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader canGoback={canGoback} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
