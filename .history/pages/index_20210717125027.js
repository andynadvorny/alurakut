import MainWrapper from '../src/components/MainWrapper'
import Box from '../src/components/Box'

export default function Home() {
  return (
    <MainWrapper> 
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src="https://github.com/andynadvorny.png" />
        </Box>
      </div>
      <div className="mainArea" style={{ gridArea: 'mainArea' }}>
        <Box>main header</Box>
        <Box>main content</Box>
      </div>
      <div className="sideArea" style={{ gridArea: 'sideArea' }}>
        <Box>sidebar</Box>
      </div>
    </MainWrapper>
  )
}
