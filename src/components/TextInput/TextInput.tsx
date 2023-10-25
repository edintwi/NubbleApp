/* eslint-disable @typescript-eslint/no-shadow */
import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppTheme} from '@hooks';

import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMsg?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}
export function TextInput({
  label,
  errorMsg,
  RightComponent,
  boxProps,
  ...RNTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMsg ? 2 : 1,
    padding: 's16',
    borderColor: errorMsg ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box>
          <Text preset="paragraphMedium" mb="s4">
            {label}
          </Text>
          <Box {...$textInputContainer}>
            <RNTextInput
              ref={inputRef}
              placeholderTextColor={colors.gray2}
              {...RNTextInputProps}
              style={{...$textInputStyle}}
            />
            {RightComponent && (
              <Box ml="s16" justifyContent="center">
                {RightComponent}
              </Box>
            )}
          </Box>
          {errorMsg && (
            <Text color="error" preset="paragraphSmall" bold>
              {errorMsg}
            </Text>
          )}
        </Box>
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
