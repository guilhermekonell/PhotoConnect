import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

function Table({ children, noResults }) {
  return (
    <>
      {noResults ? (
        <Container>
          <strong>Não há resultados a mostrar</strong>
        </Container>
      ) : (
        <Content>{children}</Content>
      )}
    </>
  );
}

export default Table;

Table.propTypes = {
  children: PropTypes.element.isRequired,
  noResults: PropTypes.bool.isRequired,
};
