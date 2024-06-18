import {$textInputStyle, Box, Text} from '@components';
import {useAppTheme} from '@hooks';
import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

interface TextInputProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...RNTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisable = value?.trim().length === 0;
  return (
    <Pressable onPressIn={focusInput}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...RNTextInputProps}
        />
        <Pressable
          disabled={sendIsDisable}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisable ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
