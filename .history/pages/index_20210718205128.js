import React from 'react'
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
    <Box as="aside">
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
    'juunegreiros',
    'teste1',
    'teste2',
    'teste3',
    'teste4',
    'teste5'
  ]
  const [comunidades, setComunidades] = React.useState([{
    id: new Date(),
    name: 'namgi',
    cover: 'https://github.com/namgi.png'
  }]) 

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
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
            <h2 className="subTitle">What do you want to do?</h2>
            <form onSubmit={function handleCreateComunidade(e) {
              e.preventDefault()
              const dadosDoForm = new FormData(e.target)
              const newComunidade = {
                id: new Date(),
                name: dadosDoForm.get('title'),
                cover: dadosDoForm.get('cover')
              }
              const updatedComunidades = [...comunidades, newComunidade]
              setComunidades(updatedComunidades)
            }}>
              <div>
                <input 
                  type="text"
                  placeholder="Qual vai ser o nome da sua comindade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comindade?" 
                />
              </div>
              <div>
                <input 
                  type="text"
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="cover" 
                  aria-label="Coloque uma URL para usarmos de capa" 
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="sideArea" style={{ gridArea: 'sideArea' }}>
        <ProfileRelationsWrapper>
          <h2 className="smallTitle">Docks ({comunidades.length})</h2>
          <ul>
            { comunidades.slice(0, 6).map((comunidade) => {
              return (
                <li key={comunidade.name}>
                  <a href={`/user/${comunidade.name}`}>
                    <img src={comunidade.cover} />
                    <span>{comunidade.name}</span>
                  </a>
                </li>
              )  
            }) }
          </ul>
        </ProfileRelationsWrapper>
        <ProfileRelationsWrapper>
            <h2 className="smallTitle">Crew ({friends.length})</h2>
            <ul>
              { friends.slice(0, 6).map((githubUser) => {
                return (
                  <li key={githubUser}>
                    <a href={`/user/${githubUser}`}>
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
