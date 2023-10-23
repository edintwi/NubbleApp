import React from 'react';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';
import {TextInput, TextInputProps  } from '../TextInput/TextInput';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          onChangeText={field.onChange}
          value={field.value}
          errorMsg={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}