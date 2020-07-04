import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { Container } from './styles';

function FileList({ files, removeFile }) {
  return (
    <Container>
      {files.map((file) => (
        <li key={file.name}>
          <img src={file.url} alt="" />
          {removeFile ? (
            <button type="button" onClick={() => removeFile(file)}>
              <MdDelete size={22} />
            </button>
          ) : (
            <></>
          )}
        </li>
      ))}
    </Container>
  );
}

export default FileList;

FileList.propTypes = {
  files: PropTypes.arrayOf(Object).isRequired,
  removeFile: PropTypes.func,
};

FileList.defaultProps = {
  removeFile: null,
};
