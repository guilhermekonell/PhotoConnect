import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Featured, AccessCard } from './styles';

function Dashboard() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      {profile.provider ? (
        <>
          <h1>Dashboard fotógrafo</h1>
          <Featured>
            <AccessCard to="/portfolio">
              <h2>Portfolio</h2>
              <span>
                Configurar dados cadastrado do seu portfolio. As informações de
                seu portofolio são importantes para que os usuários lhe conheçam
                e identifiquem seu trabalho fotógráfico.
              </span>
            </AccessCard>
            <AccessCard to="/provider/services">
              <h2>Serviços</h2>
              <span>
                Verifique o status ou histórico de seus serviços fotográficos.
              </span>
            </AccessCard>
          </Featured>
        </>
      ) : (
        <>
          <Featured>
            <AccessCard to="/portfolio">
              <h2>Sou um Fotógrafo</h2>
              <span>Cadastrar portfolio para prestação de serviços.</span>
            </AccessCard>
          </Featured>
        </>
      )}

      <h1>Dashboard Usuário</h1>
      <Featured>
        <AccessCard to="/profile">
          <h2>Perfil</h2>
          <span>
            Configurar dados cadastrado do seu perfil. As informações de seu
            perfil são importantes para que o contato com fotógrafo ocorra com
            sucesso.
          </span>
        </AccessCard>
        <AccessCard to="/services">
          <h2>Fotógrafos</h2>
          <span>
            Pesquisar e acessar lista de fotógrafos disponíveis para contratos
            de serviço. Encontre o fotógrafo com o portfólio que mais lhe
            agrada.
          </span>
        </AccessCard>
        <AccessCard to="/services">
          <h2>Serviços</h2>
          <span>
            Verifique o status ou histórico de serviços fotográficos
            solicitados.
          </span>
        </AccessCard>
      </Featured>
    </Container>
  );
}

export default Dashboard;
