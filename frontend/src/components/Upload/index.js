import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

function Upload({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return (
        <UploadMessage>Selecione ou arraste suas imagens aqui.</UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  }

  return (
    <Dropzone accept="image/*" onDropAccepted={(files) => onUpload(files)}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} data-testid="upload" />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}

export default Upload;

Upload.propTypes = {
  onUpload: PropTypes.func.isRequired,
};
