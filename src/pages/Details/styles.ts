import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 696px;
  width: 100%;
  font-family: 'AustralisProSwash-Italic';
  background-color: #f8f5de;
  background-image: linear-gradient(
    to right,
    rgba(255, 210, 0, 0.4),
    rgba(200, 160, 0, 0.1) 11%,
    rgba(0, 0, 0, 0) 35%,
    rgba(200, 160, 0, 0.1) 65%
  );
  box-shadow: inset 0 0 75px rgba(255, 210, 0, 0.3),
    inset 0 0 20px rgba(255, 210, 0, 0.4), inset 0 0 30px rgba(220, 120, 0, 0.8);
  color: rgba(0, 0, 0, 0.5);
  /* width: calc(8.5in - 15em); */
  letter-spacing: 0.05em;
  /*line-height: 1.8; */
  /* padding: 5em 10em 15em 5em; */
  padding-left: 10rem;
  padding-top: 3rem;
  padding-right: 10rem;

  .bg-gen {
    background-color: #c00a56;
  }

  .badge {
    font-size: 1.9rem;
  }

  /* .page {
    background-color: #f8f5de;
    background-image: linear-gradient(
      to right,
      rgba(255, 210, 0, 0.4),
      rgba(200, 160, 0, 0.1) 11%,
      rgba(0, 0, 0, 0) 35%,
      rgba(200, 160, 0, 0.1) 65%
    );
    box-shadow: inset 0 0 75px rgba(255, 210, 0, 0.3),
      inset 0 0 20px rgba(255, 210, 0, 0.4),
      inset 0 0 30px rgba(220, 120, 0, 0.8);
    color: rgba(0, 0, 0, 0.5);
    width: calc(8.5in - 15em);
    letter-spacing: 0.05em;
    line-height: 1.8;
    padding: 5em 10em 15em 5em;
  } */
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
  min-height: 100%;

  .badge {
    max-width: 18%;
    top: 5%;
    position: absolute;
  }

  ul {
    list-style: none;
    padding-left: 0.1rem;

    li {
      margin: 2%;
    }
  }
`;
export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-height: 100%;

  h4 {
    margin-top: 2%;
    font-size: 1.35rem;
    text-align: center;
  }
`;
export const SkillTable = styled.div`
  ul {
    list-style: none;
    padding-left: 0.5rem;

    li {
      display: flex;
      flex-direction: column;

      margin: 4%;
      & + li {
      }

      .statLabel {
        margin-left: -10px;
        font-size: 1.1rem;
        margin-bottom: 3%;
      }

      .progress-bar {
      }
    }
  }
`;

export const InfoTable = styled.div``;
