import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  color: #f1faee;
  padding: 10px;
  border-radius: 4px;
`;

export const Content = styled.table`
  width: 100%;
  max-width: 1024px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 4px;
  border-spacing: 0;

  thead th {
    color: #333;
    text-align: left;
    font-size: 16px;
    color: #f1faee;
    padding: 10px;
  }

  tbody {
    background: rgba(0, 0, 0, 0.2);

    tr {
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }

      td {
        padding: 5px 10px;
        max-width: 400px;
        height: 40px;
        color: #f1faee;

        border-bottom: 1px solid rgba(0, 0, 0, 0.5);

        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &:last-child {
          width: 120px;
          text-align: right;
        }

        main {
          display: flex;
          align-items: center;

          img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
