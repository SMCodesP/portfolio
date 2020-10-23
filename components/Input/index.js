import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import {
  Input as InputComponent,
} from './styles'

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <InputComponent name={name} ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
