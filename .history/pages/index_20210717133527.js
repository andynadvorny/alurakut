import { AlurakutMenu } from '../src/lib/AluraCommons'
import MainWrapper from '../src/components/MainWrapper'
import Box from '../src/components/Box'

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'andynadvorny'
  const friends = [
    'peas',
    'juunegreiros'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainWrapper> 
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="mainArea" style={{ gridArea: 'mainArea' }}>
          <Box>main header</Box>
          <Box>main content</Box>
        </div>
        <div className="sideArea" style={{ gridArea: 'sideArea' }}>
          <Box>
            { friends.map((friend) => {
              return (
                <img src={`https://github.com/${friend}.png`} style={{ borderRadius: '8px' }}/>
              )  
            }) }
          </Box>
        </div>
      </MainWrapper>
    </>
  )
}
