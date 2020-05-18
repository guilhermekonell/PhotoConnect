import React, { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';

import { useField } from '@rocketseat/unform';

function InputMask({ ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField('phone_number');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
  );
}

export default InputMask;
