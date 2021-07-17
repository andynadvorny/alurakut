import styled from 'styled-components'

const MainWrapper = styled.main`
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

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`

export default function Home() {
  return (
    <MainWrapper> 
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Card>
          <img src="https://github.com/andynadvorny.png" />
        </Card>
      </div>
      <div className="mainArea" style={{ gridArea: 'mainArea' }}>
        <Card>main header</Card>
        <Card>main content</Card>
      </div>
      <div className="sideArea" style={{ gridArea: 'sideArea' }}>
        <Card>sidebar</Card>
      </div>
    </MainWrapper>
  )
}
