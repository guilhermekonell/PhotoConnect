import React, { useEffect, useState } from 'react';
import { Container, Portfolio, Cards } from './styles';
import { Link } from 'react-router-dom';
import api from '../../../services/api';


function ServiceStatus() {
    return (
    <Container>
       <Cards>
           <row>
               <column>
                    <Portfolio>
                        <Link>Solicitações</Link> 
                    </Portfolio>
                </column>
                <column>
                    <Portfolio>
                        <Link>Pendentes</Link>  
                    </Portfolio>
                </column>
                <column>
                    <Portfolio>
                        <Link>Concluídos</Link> 
                    </Portfolio>
                </column>
            </row>
        </Cards>
    </Container>
    
    );
}



export default ServiceStatus;