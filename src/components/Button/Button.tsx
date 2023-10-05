import React from 'react';
import {TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import {Text} from '../Text/Text';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import { buttonPresets } from './ButtonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean,
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...TouchableOpacityBoxProps
}: ButtonProps) {

  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      paddingHorizontal="s20"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...TouchableOpacityBoxProps}
      >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content}/>
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content} >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
