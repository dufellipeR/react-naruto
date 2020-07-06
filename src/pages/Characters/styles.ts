import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  padding: 5%;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  min-height: 100vh;

  svg {
    width: 0px;
    height: 0px;
  }
`;

export const CharactersList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 60px;
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  /* align-self: center;
  justify-self: center; */
`;
