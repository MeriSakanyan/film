import styled from "styled-components";

export default styled.div`
    .Top-Movies-header {
      display: flex;
      justify-content: space-between;
    }
     h1 {
      color: ${(props) => props.theme.colors.TopMovies}; 
      font-size: 24px;
    }
     .update-btn {
      margin-top: 20px;
      color: ${(props) => props.theme.colors.updateBtnColor};
    }
     .Top_Movies_main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
`