import styled from 'styled-components'

const MainWrapper = styled.main`
  display: grid;
  gap: 10px;
  padding: 1rem;

  @media(min-width: 860px) {
    grid-template-areas: "profileArea mainArea sideArea";
    grid-template-columns: 160px 1fr 312px;
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
