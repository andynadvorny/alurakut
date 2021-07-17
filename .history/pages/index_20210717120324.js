import styled from 'styled-components'

const MainWrapper = styled.main`
  display: grid;
  gap: 10px;
  padding: 1rem;

  @media(min-width: 860px) {
    grid-template-areas: "profileArea mainArea sideArea";
    grid-template-columns: 160px 618px 312px;
  }
`

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`

export default function Home() {
  return (
    <MainWrapper> 
      <Card style={{ gridArea: 'profileArea' }}>teste</Card>
      <Card style={{ gridArea: 'mainArea' }}>teste</Card>
      <Card style={{ gridArea: 'sideArea' }}>teste</Card>
    </MainWrapper>
  )
}
