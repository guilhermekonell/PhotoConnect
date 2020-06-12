import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;

    button {
      border: none;
      margin: 0;
      padding: 0;
      width: 100%;
      border-radius: 0 0 4px 4px;
      background: #457b9d;

      &:hover {
        background: ${darken(0.03, '#457b9d')};
      }

      svg {
        color: rgba(255, 255, 255, 0.7);
        width: 100%;
        height: 25px;

        padding: 2px 0 0 0;
        cursor: pointer;
      }
    }

    img {
      width: 140px;
      padding: 5px;
      border-radius: 4px 4px 0 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
