import styled from 'styled-components';



export const Container = styled.div`
  display: center;
  justify-content: center;
  align-items: center;
  align-text: center;

  max-width: 900px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    
  }

  h3 {
    display: flex;
    align-text: center;
  }
`;

export const Grid = styled.div`
box-sizing: border-box;

img {
  width:100%;
}

body {
    margin: 0;
    font-family: Arial;
}

.header {
    text-align: center;
    padding: 32px;
}

.row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
}

.column {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
}


@media screen and (max-width: 800px) {
    .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
    }
}


@media screen and (max-width: 600px) {
    .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
}
`;

export const Portfolio = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
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
    font-size: 20px;
    
  }
  
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;

`;