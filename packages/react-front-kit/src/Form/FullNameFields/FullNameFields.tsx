'use client';

import type { FlexProps, TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Flex, TextInput } from '@mantine/core';

interface IFullNameFieldsValues {
  firstName?: string;
  lastName?: string;
}

export interface IFullNameFieldsProps extends FlexProps {
  firstNameProps?: TextInputProps;
  lastNameProps?: TextInputProps;
  onValueChange?: (value: IFullNameFieldsValues) => void;
  value?: IFullNameFieldsValues;
}

export function FullNameFields(props: IFullNameFieldsProps): ReactElement {
  const { firstNameProps, lastNameProps, value, onValueChange, ...flexProps } =
    props;

  return (
    <Flex gap="sm" {...flexProps}>
      <TextInput
        label="First name"
        onChange={(e) => onValueChange?.({ firstName: e.target.value })}
        placeholder="Jean"
        value={value?.firstName}
        {...firstNameProps}
      />
      <TextInput
        label="Last name"
        onChange={(e) => onValueChange?.({ lastName: e.target.value })}
        placeholder="Dupont"
        value={value?.lastName}
        {...lastNameProps}
      />
    </Flex>
  );
}
