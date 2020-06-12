import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Portfolio } from './styles';

function Dashboard() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      {profile.provider ? (
        <></>
      ) : (
        <Portfolio>
          <Link to="/portfolio">Sou um Fotógrafo</Link>
        </Portfolio>
      )}
    </Container>
  );
}

export default Dashboard;
