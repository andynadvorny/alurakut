import MainWrapper from '../src/components/MainWrapper'
import Card from '../src/components/Card'

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
