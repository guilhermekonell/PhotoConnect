import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }

      &:maskplaceholder {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    span {
      color: #1d3557;
      align-self: flex-start;
      margin: -8px 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #1d3557;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#1d3557')};
      }
    }

    select {
        background: #1d3557;
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;

        &::placeholder {
            color: rgba(0, 0, 0, 0.2);
        }

        &:maskplaceholder {
            color: rgba(0, 0, 0, 0.2);
        }

        
      }
  }

  textarea {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 100px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }

    &:maskplaceholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

 
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #e63946;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.12, '#e63946')};
    }
  }
`;