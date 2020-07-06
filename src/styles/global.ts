import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body {
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
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font: 16px Roboto,sans-serif;
    }

    /* Centraliza o conteudo */
    /* #root {
      max-width: 1300px;
      max-height: 100%;
      margin: 0 1%;
      padding: 20px 10px;
    } */

    button {
      cursor: pointer
    }

    .bg-70 {
    background-color: #c0c0c0;
  }

  .bg-90 {
    background-color: #6b0f1a;
    background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);

  }

  /* Fazer variaveis para os backgrounds */

    .bg-80 {
    background-color: #f7b42c;
    background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);

  }

  .bg-100 {
    background-color: #592040;
  }

  /* The moving element */
    .loading::after {
        display: block;
        content: "";
        position: absolute;
        width: 80%;
        top: 0;
        height: 100%;
        transform: translateX(-65%);
        background: -webkit-gradient(linear, left top,
                    right top, from(transparent),
                    color-stop(rgba(255, 255, 255, 0.2)),
                    to(transparent));

        background: linear-gradient(90deg, transparent,
                rgba(255, 255, 255, 0.1), transparent);

        /* Adding animation */
        animation: loading 2s infinite;
    }

    /* Loading Animation */
    @keyframes loading {
        100% {
            transform: translateX(45%);
        }
    }
`;
