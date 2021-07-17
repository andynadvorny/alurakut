import MainWrapper from '../src/components/MainWrapper'
import Box from '../src/components/Box'

function ProfileSidebar() {
  const githubUser = 'andynadvorny'
  
  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  return (
    <MainWrapper> 
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar />
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
