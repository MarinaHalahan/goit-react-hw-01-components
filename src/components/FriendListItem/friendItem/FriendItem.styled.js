import styled from 'styled-components';

export const ItemWrapper = styled.li`
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  display: inline-flex;
  gap: 15px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;
