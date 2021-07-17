import styled from 'styled-components'

const MainWrapper = styled.main`
  display: grid;
  gap: 10px;
  padding: 1rem;

  @media(min-whidth: 860px) {
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
      <Card>teste</Card>
      <Card>teste</Card>
      <Card>teste</Card>
    </MainWrapper>
  )
}
