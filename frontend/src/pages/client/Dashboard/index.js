import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Portfolio, Featured, AccessCard } from './styles';



function Dashboard() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      {profile.provider ? (
        <div>
        <Featured>
          <row>
            <column>
              <Link to="/profile">
                <AccessCard>
                    <header><h2>Perfil</h2></header>
                    <div><span>😎</span></div>
                    <span>
                    Configurar dados cadastrado do seu perfil. 
                    </span>
                </AccessCard>
              </Link>  
            </column>
            <column>
              <Link to="/portfolio">
                <AccessCard>
                    <header><h2>Portfolios</h2></header>
                    <div><span>👔</span></div>
                    <span>
                    Acessar acervo de portfolios cadastrados
                    </span>
                </AccessCard>
              </Link>
            </column>
            <column>
              <Link to="/services">
                <AccessCard>
                    <header><h2>Serviços</h2></header>
                    <div><span>🛒</span></div>
                    <span>
                    Verifique o status ou histórico de serviços fotográficos solicitados.
                    </span>
                  </AccessCard>
                </Link>
            </column>
          </row>
              
            
        </Featured>
  
        
        </div>
      ) : (
        <div>
      <Portfolio>
          <Link to="/portfolio">Sou um Fotógrafo</Link>
        </Portfolio>
      <Featured>
        <row>
          <column>
            <Link to="/profile">
              <AccessCard>
                  <header><h2>Perfil</h2></header>
                  <div><span>😎</span></div>
                  <span>
                  Configurar dados cadastrado do seu perfil. As informações de seu perfil são importantes para que o contato com fotógrafo ocorra com sucesso.
                  </span>
              </AccessCard>
            </Link>  
          </column>
          <column>
            <Link to="/services">
              <AccessCard>
                  <header><h2>Fotógrafos</h2></header>
                  <div><span>📸</span></div>
                  <span>
                  Pesquisar e acessar lista de fotógrafos disponíveis para contratos de serviço. Encontre o fotógrafo com o portfólio que mais lhe agrada.
                  </span>
              </AccessCard>
            </Link>
          </column>
          <column>
            <Link to="/services">
              <AccessCard>
                  <header><h2>Serviços</h2></header>
                  <div><span>🛒</span></div>
                  <span>
                  Verifique o status ou histórico de serviços fotográficos solicitados.
                  </span>
                </AccessCard>
              </Link>
          </column>
        </row>
            
          
      </Featured>

      <h3>Último serviço entregue</h3>
      </div>
        

      )}
      
      

    
      
    </Container>
  );
}

export default Dashboard;
