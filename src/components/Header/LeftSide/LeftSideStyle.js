import styled from "styled-components";

export default styled.div`
        display: flex;
        justify-content: space-around;
        justify-content: space-between;
        max-width: 500px;
        align-items: center;

.ant-select {
    .ant-select-selection-item {
         background-color: #1b1e20;
         color: white;
       }

    .ant-select-arrow {
        color: white;
        font-size: 9px;
       }
}
   
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector  {
        background-color: #1b1e20;
        border: none;
        font-size: 15px;
        color: white;
}   

      @media (max-Width:991px){
        width: 100%;
        display: flex;
        justify-content: space-between;
}


      @media (max-Width:991px){
         .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
               font-size: 20px;
          }
}

`