import PropTypes from 'prop-types';

import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

export default function TextArea({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <textarea
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
};
