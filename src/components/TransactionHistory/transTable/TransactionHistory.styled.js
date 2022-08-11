import styled from 'styled-components';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  width: 730px;
  border: 1px solid #eceff1;
  box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
  border-collapse: collapse;
`;

export const Head = styled.thead`
  background-color: rgb(61, 157, 221);
`;

export const Title = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
  color: white;
  text-transform: uppercase;
  border: 1px solid white;
`;
export const Body = styled.tbody``;
export const Row = styled.tr`
  :nth-child(even) {
    background-color: #eceff1;
  }
`;
export const Box = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  border-right: 1px solid #e0e2eb;
  text-align: center;
  text-transform: capitalize;
  color: #909196;
`;
