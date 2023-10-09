import React from 'react';
import {Box} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

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
            <Box flexDirection="row" mb="s24">
              <Icon name="arrowLeft" color="primary" />
              <Text semiBold preset="paragraphMedium" ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
