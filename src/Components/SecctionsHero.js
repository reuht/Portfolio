import styled from "styled-components";

const SecctionsHero = styled.section`
  height: 43.75rem;
  width: 100%;
  padding: 6.25rem;
  font-family: sans-serif;
  background-color: #302e49;

  h1 {
    margin: 1rem 0;
    font-size: 1.66rem;
    font-weight: 600;
    color: #01a7c2;
  }

  h2 {
    margin: 1rem 0;
    /* width: max-content; */
    font-size: 5rem;
    font-weight: 700;
    color: #fbf5f3;
  }

  .title {
    color: #b4b0ae;
  }

  .description {
    margin: 1rem 0;
    width: 49.4rem;
    /* height: 9.6rem; */
    font-size: 1.25rem;
    line-height: 1.6rem;
    color: #fbf5f3;
  }

  button {
     width: 13rem;
     height: 3rem;
     color: #01a7c2;
     font-size: 1.6rem;
     border: 2px solid #01a7c2;
     background-color: #302e49;
     cursor: pointer;
  }

  @media screen and (max-width: 992px) {
    height: 43.75rem;
    width: 100%;
    padding: 3rem;
    font-family: sans-serif;
    background-color: #302e49;
  }

  @media screen and (max-width: 540px) {
    height: 43.75rem;
    width: 100%;
   
    font-family: sans-serif;
    background-color: #302e49;


    h1 {
      margin: 0.5rem 0;
      font-size: 1.66rem;
      font-weight: 600;
      color: #01a7c2;
    }

    h2 {
      margin: 0.5rem 0;
      /* width: ; */
      font-size: 2.5rem;
      font-weight: 700;
      color: #fbf5f3;
    }

    .title {
      color: #b4b0ae;
    }

    .description {
      width: inherit;
      font-size: 1.25rem;
      line-height: 1.6rem;
      color: #fbf5f3;

      span {
          width: max-content;
          display: block;
          width: 100%;
          /* height: inherit; */
      }
   
    }
  }
`;

export default SecctionsHero;
