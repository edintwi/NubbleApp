import React from 'react';
import {
  PasswordInput,
  PasswordInputProps,
} from '@components';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          onChangeText={field.onChange}
          value={field.value}
          errorMsg={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}
