import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 900px;
  margin: 0 auto;
`;

export const Portfolio = styled.div`
  width: 900px;
  height: 150px;
  margin-top: 30px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(-90deg, #1d3557, #457b9d);

    width: 900px;
    height: 150px;
    padding: 15px;
    border: 0;
    border-radius: 12px;
    color: #fff;
    font-weight: bold;
    font-size: 45px;
  }
`;
