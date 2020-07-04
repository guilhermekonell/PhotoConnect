import styled from 'styled-components';

export const Container = styled.div`
  > button {
    background: transparent;
    border: none;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: transparent;
    border: none;
    border-radius: 4px;
    margin: 5px;
    padding: 10px;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    svg {
      margin-right: 10px;
    }
  }
`;
