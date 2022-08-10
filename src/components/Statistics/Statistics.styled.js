import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatWrapper = styled.section`
width: 100%;

.titleStat{
   text-align: center;
    text-transform: uppercase;
    margin-top: 50px;
    margin-bottom:50px;
     margin-left: auto;
    margin-right: auto;
}
    
`;

export const StatList = styled.ul`
    justify-content: center;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    list-style: none;
    display: flex;

    
    
`;

export const StatItem = styled.li`
    padding: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap:5px;
    color: white;

    :nth-child(even){
    background-color:${getRandomHexColor()}};

    :nth-child(odd){
    background-color:${getRandomHexColor()}};
    
`;
