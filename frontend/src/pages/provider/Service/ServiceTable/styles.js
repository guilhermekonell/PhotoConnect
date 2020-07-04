import styled from 'styled-components';

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 3px 3px 3px;
  border-radius: 4px;

  button {
    background: transparent;
    border: none;

    & + button {
      margin-left: 10px;
    }
  }
`;
