import { 
  AlurakutMenu, 
  AlurakutProfileSidebarMenuDefault, 
  OrkutNostalgicIconSet 
} from '../src/lib/AluraCommons'
import { ProfileRelationsWrapper } from '../src/components/ProfileRelationsWrapper'
import MainWrapper from '../src/components/MainWrapper'
import Box from '../src/components/Box'

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
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
          <Box>
            <h1 className="title">Welcome</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="smallTitle">What do you want to do?</h2>
            <form>
              <input placeholder="Qual vai ser o nome da sua comindade?" />
            </form>
          </Box>
        </div>
        <div className="sideArea" style={{ gridArea: 'sideArea' }}>
          <ProfileRelationsWrapper>
            <h2 className="smallTitle">Crew ({friends.length})</h2>
            <ul>
              { friends.map((githubUser) => {
                return (
                  <li>
                    <a href={`/user/${githubUser}`} key={githubUser}>
                      <img src={`https://github.com/${githubUser}.png`} />
                      <span>{githubUser}</span>
                    </a>
                  </li>
                )  
              }) }
            </ul>
          </ProfileRelationsWrapper>
        </div>
      </MainWrapper>
    </>
  )
}
