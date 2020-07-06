import styled from 'styled-components';

export const Container = styled.div``;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;

  span {
    font-size: 1rem;
    text-shadow: white 0px 0px 10px;
  }

  svg {
    max-width: 15px;
  }

  .overallDiv {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: row;

    h4 {
      font-size: 1rem;
      margin: 0;
      text-shadow: black 0px 0px 12px;
    }
  }

  .box {
    position: relative;
    width: 200px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      z-index: 1;
      transition: 0.7s;
    }

    &:hover {
      /* color: #000; */
      /* transform: perspective(700px) rotateY(220deg); */
      transform: perspective(600px) rotateY(15deg);

      img {
        -webkit-box-reflect: below 15px
          linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.2));
        /* box-shadow: 10px 10px 10px 10px rgba(120, 135, 182, 0.4); */
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      width: 100%;
      height: 100%;
      border: 4px solid #fff;
      filter: url(#wavy);
      background-color: #6b0f1a;
      background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
    }

    /* &:hover:before {
        background: #f08b8b;
        transition: 0.5s;
      } */

    .content {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      /* padding: 20px; */
      text-align: center;
      transition: 0.5s;
      min-height: 95%;
      min-width: 90%;
    }

    &:after {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50%;
      height: 100%;
      border: 4px solid #fff;
      border-right: none;
      background: rgba(255, 255, 255, 0.1);
      filter: url(#wavy);
    }
  }
`;
