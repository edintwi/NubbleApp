import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {Toast, ToastType} from '@services';
import {$shadowProps} from '@theme';
import React from 'react';
import {Dimensions} from 'react-native';

const MAX_WIDTH = Dimensions.get('screen').width * 0.95;

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  const position: Required<Toast>['position'] = toast?.position || 'top';
  const type: ToastType = toast.type || 'sucess';

  if (!toast) {
    return null;
  }
  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />

      <Text style={{flexShrink: 1}} ml="s16" bold preset="paragraphMedium">
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  sucess: {
    color: 'sucess',
    name: 'checkRoundIcon',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  alignSelf: 'center',
  borderRadius: 's16',
  backgroundColor: 'background',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
