import styled from 'styled-components'

const MainWrapper = styled.main`
  
  gap: 10px;
  padding: 1rem;

  @media(min-width: 860px) {
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
