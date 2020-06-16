import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 900px;
  margin: 40px auto;

  form {
    display: flex;
    flex-direction: column;
    width: 600px;

    h1 {
      color: #1d3557;
      font-size: 24px;
      margin-bottom: 15px;
    }

    span {
      color: #e63946;
      align-self: flex-start;
      margin: -8px 0 10px;
      font-weight: bold;
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 12px 15px;
      color: #fff;
      margin: 0 0 10px;
      resize: vertical;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    > button {
      margin: 10px 0 0;
      height: 44px;
      background: #1d3557;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#1d3557')};
      }
    }
  }
`;
