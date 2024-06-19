import {Box, BoxProps, Icon, Text} from '@components';
import {useToast, useToastService} from '@services';
import {$shadowProps} from '@theme';
import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

const MAX_WIDTH = Dimensions.get('screen').width * 0.95;

export function Toast() {
  const toast = useToast();
  const {hideToast, showToast} = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 2000);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }
  return (
    <Box {...$boxStyle}>
      <Icon name="checkRoundIcon" color="sucess" />
      <Text style={{flexShrink: 1}} ml="s16" bold preset="paragraphMedium">
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  top: 100,
  alignSelf: 'center',
  borderRadius: 's16',
  backgroundColor: 'background',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
