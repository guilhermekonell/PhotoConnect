import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #12a454;
`;

const dragReject = css`
  border-color: #e83f5b;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  background: rgba(0, 0, 0, 0.1);
  border: 2px dashed rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive}

  ${(props) => props.isDragReject && dragReject}
`;

const messageColors = {
  default: 'rgba(255, 255, 255, 0.7)',
  error: '#e83f5b',
  success: '#12a454',
};

export const UploadMessage = styled.p`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 48px 0;

  color: ${({ type }) => messageColors[type || 'default']};

  justify-content: center;
  align-items: center;
`;
