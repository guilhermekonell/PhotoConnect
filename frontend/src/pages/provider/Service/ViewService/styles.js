import styled from 'styled-components';

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
    color: #f1faee;
  }

  span {
    font-size: 14px;
    color: #f1faee;

    strong {
      font-size: 14px;
      color: #f1faee;
    }

    & + span:last-child {
      margin-bottom: 10px;
    }
  }
`;

export const ContentFiles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  padding: 10px;

  background: rgba(0, 0, 0, 0.1);
`;

export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  padding: 10px;

  background: rgba(0, 0, 0, 0.1);

  strong {
    color: #f1faee;
  }
`;
