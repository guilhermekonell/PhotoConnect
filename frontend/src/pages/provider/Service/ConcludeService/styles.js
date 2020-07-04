import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;

  h1 {
    color: #1d3557;
    font-size: 24px;
    margin: 15px 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentForm = styled.div`
  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  padding: 20px;

  background: rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;

    span {
      font-weight: bold;
      margin: 10px 0;
      font-size: 16px;
      color: #fff;
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

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 270px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 30px 0;
  width: 270px;

  & + div {
    margin-top: 10px;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 8px;
  }

  > strong {
    font-size: 16px;
    margin: 8px 0;
    color: #fff;
  }

  span {
    font-size: 14px;
    color: #fff;

    strong {
      font-size: 14px;
      color: #fff;
    }

    & + span:last-child {
      margin-bottom: 10px;
    }
  }
`;
