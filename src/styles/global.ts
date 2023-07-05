import { createGlobalStyle } from "styled-components";
import Mail from "../assets/Mail.jpg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #474747;
    color:  #bfbfbf;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
  }
  strong {
    font-weight: 500;
  }

  h2 {
    font-family: 'Barrio';
    margin-bottom: 3.75rem;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    color: #8f8f8f;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }    
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;      
    }
    #root {
      overflow-x: hidden;
    }    
  }

  // React Modal

    .ReactModal__Body--open {
        overflow: hidden;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000 !important;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;

        @media (max-width: 820px){
          max-width: 100vw;
          
        }

        &--beforeClose {
            opacity: 0 !important;
            
        }

        &--afterOpen {
            opacity: 1;            
        }
    }
    .react-modal-content {
        width: 100%;  
        max-width: 50rem;        
        height: 37.5rem;
        background: #474747;
        box-shadow: 24px 24px 48px rgba(112, 112, 112, 0.15);        
        position: relative;
        border-radius: 4px;        
        transition: all 0.2s ease;
        display: flex;
        flex-direction: row-reverse;
        background-image: url(${Mail});
        background-repeat: no-repeat;        
    }

    .react-modal-close {
      // TODO
    }    

    @media screen and (max-width: 768px) {
        .react-modal-content {
            border-radius: 10px;
            max-width: 26.125rem;            
            width: 80.69%;
            background-image: unset;            
            height: unset;                        
        }
        
        .react-modal-close {
          transform:translateX(-4px)
        }
    }
`;
