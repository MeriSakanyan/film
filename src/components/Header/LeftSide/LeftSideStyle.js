import styled from "styled-components";

export default styled.div`
        display: flex;
        justify-content: space-around;
        max-width: 500px;
        align-items: center;

.ant-select {
    .ant-select-selection-item {
         background-color: inherit;
         color: ${(props) => props.theme.colors.languageColor};
       }

    .ant-select-arrow {
        color: ${(props) => props.theme.colors.languageColor};
        font-size: 9px;
       }
}
   
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector  {
        background-color: inherit;
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