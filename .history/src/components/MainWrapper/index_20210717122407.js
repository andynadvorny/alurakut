import styled from 'styled-components'

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 500px;
  gap: 10px;
  margin: 0 auto;
  padding: 16px;

  .profileArea {
    display: none;

    @media (min-width:860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea mainArea sideArea";
    grid-template-columns: 160px auto 312px;
  }
`