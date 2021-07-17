import MainWrapper from '../src/components/MainWrapper'

import styled from 'styled-components'

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
