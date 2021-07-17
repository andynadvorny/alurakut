import styled from 'styled-components'

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`

export default function Home() {
  return (
    <main> 
      <Card>teste</Card>
    </main>
  )
}
