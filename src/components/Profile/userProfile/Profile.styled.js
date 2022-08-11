import styled from 'styled-components';

export const ProfileSection = styled.section`
  width: 100%;
  margin-top: 25px;
  pading: 15px;
`;

export const ProfileWrapper = styled.div`
  display: block;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
`;

export const DescriptionUser = styled.div`
  background-color: white;
  text-align: center;

  .userImg {
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    border: 1px solid #161d2a;
  }

  .nameUser {
    font-size: 18px;
    color: #161d2a;
    font-weight: 600;
  }
`;

export const StatsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  background-color: #eceff1;
`;
