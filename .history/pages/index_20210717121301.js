import styled from 'styled-components'

const MainWrapper = styled.main`
  width: 100%;
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

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`

export default function Home() {
  return (
    <MainWrapper> 
      <div style={{ gridArea: 'profileArea' }}>
        <Card>profile</Card>
      </div>
      <div style={{ gridArea: 'mainArea' }}>
        <Card>main header</Card>
        <Card>main content</Card>
      </div>
      <div style={{ gridArea: 'sideArea' }}>
        <Card>sidebar</Card>
      </div>
    </MainWrapper>
  )
}
