import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const Content = styled.div`
  padding: 20px;

  overflow-wrap: break-word;
  width: 100%;
  background: #1d3557;
  border-radius: 4px;
`;

export const StyledPopup = styled(Popup)`
  &-content {
    width: 320px !important;
    border-radius: 4px;
    padding: 0 !important;
    border: 0 !important;
  }
`;
