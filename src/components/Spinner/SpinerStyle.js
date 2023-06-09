import styled from "styled-components";

export default styled.div`
     .lds-dual-ring:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      animation: lds-dual-ring 1.2s linear infinite;
    }

     @keyframes lds-dual-ring {
       0% {
         transform: rotate(0deg);
       }
       100% {
         transform: rotate(360deg);
       }     
     }

    .lds-spinner {
      display: inline-block;
      position: relative;
      height: 308px;
      width: 205px;
      background-color: white !important;
      padding: 114px 61px;
    }
    .lds-spinner div {
       transform-origin: 40px 40px;
       animation: lds-spinner 2.2s linear infinite;
     }
    .lds-spinner div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      margin: 0 auto;
      border-radius: 20%;
      background:  #fe7900!important;
    }

    .lds-spinner div:nth-child(1) {
       transform: rotate(0deg);
       animation-delay: -1.1s;
     }
    .lds-spinner div:nth-child(2) {
       transform: rotate(30deg);
       animation-delay: -1s;
     }
    .lds-spinner div:nth-child(3) {
       transform: rotate(60deg);
       animation-delay: -0.9s;
     }
    .lds-spinner div:nth-child(4) {
       transform: rotate(90deg);
       animation-delay: -0.8s;
     }
    .lds-spinner div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    .lds-spinner div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    .lds-spinner div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    .lds-spinner div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    .lds-spinner div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    .lds-spinner div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    .lds-spinner div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    .lds-spinner div:nth-child(12) {   
  transform: rotate(330deg);
  animation-delay: 0s;
    }   
    
    @keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
    }
`