import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: center;
  justify-content: center;
  align-items: center;

  max-width: 900px;
  margin: 0 auto;
  padding: 10px;

  > h1 {
    margin-top: 30px;
    color: #1d3557;
  }
`;

export const Featured = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;
`;

export const AccessCard = styled(Link)`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: rgba(0, 0, 0, 0.2);

  border-radius: 4px;
  padding: 20px;

  & + a {
    margin-left: 10px;
  }

  h2 {
    color: #fff;
    font-weight: bold;
    font-size: 30px;
  }

  span {
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
  }
`;

/** CODE */
