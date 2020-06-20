import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #eee;
  }
`;


export const Portfolio = styled.div`
  width: 200px;
  height: 70px;
  display: center;
  background: linear-gradient(-90deg, #1d3557, #457b9d);
  border-radius: 12px;
  justify-content: center;
  text-align: center;
  

  a {    
    
    width: 200px;
    height: 150px;
    padding: 15px;
    border: 0;
        
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    
  }
  
`;

/*export const Box = styled.div`
width: 300px;
  height: 50px;
  margin-top: 70px;
  display: flex;
  align-items: center;

  a {
    
    justify-content: center;
    align-items: center;

    background: linear-gradient(-90deg, #1d3557, #457b9d);

    width: 300px;
    height: 150px;
    padding: 15px;
    border: 0;
    border-radius: 12px;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    margin-top: 50px;
  }
      
  }*/

  export const Cards = styled.div`
  
  column {
    float: left;
    width: 32%;
    padding: 0 50px;
    margin-top: 150px;
  }

  row {margin: 0 -5px;}

  row:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 650px) {
    column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
`;

