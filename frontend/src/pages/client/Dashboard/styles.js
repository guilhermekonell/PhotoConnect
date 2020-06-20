import styled from 'styled-components';


export const Container = styled.div`
  display: center;
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
export const Featured = styled.div`
  position: relative;
  padding: 06em 0em;
  background: #fff;
  text-align: center;
  margin-top: 10px;
  border-radius: 12px;
  background: linear-gradient(-90deg, #1d3557, #457b9d);

  

  img {
    float: left;
		margin: 0.85em 2em 0em 0em;
  }

  column {
    float: left;
    width: 300px;
    padding: 0 10px;
  }

  row {
    margin: 0 -5px;
    content: "";
    display: table;
    clear: both;
    
  
  }
`;

export const AccessCard = styled.div`
  position: relative;
  
  button {
    margin-top: 2em;
  }
  
  h2 {
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    display: block;
  }

  span {
    color: #fff;
  }
  
  }
`;

/** CODE */

