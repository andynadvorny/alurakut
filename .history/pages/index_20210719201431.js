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

function ProfileRelations(props) {
  return (
    <ProfileRelationsWrapper>
      <h2 className="smallTitle">{props.title} ({props.items.length})</h2>
      <ul>
        { props.items.slice(0, 6).map((githubUser) => {
          return (
            <li key={githubUser.node_id}>
              <a href={`/user/${githubUser.login}`}>
                <img src={githubUser.avatar_url} />
                <span>{githubUser.login}</span>
              </a>
            </li>
          )  
        }) }
      </ul>
    </ProfileRelationsWrapper>
  )
}

export default function Home() {
  const githubUser = 'andynadvorny'
  const [friends, setFriends] = React.useState([])
  const [comunidades, setComunidades] = React.useState([]) 
  
  React.useEffect(() => {
    fetch('https://api.github.com/users/peas/followers')
    .then((response) => {
      if(response.ok) {
        return response.json()
      }
      throw new Error('Error fetching files :( ' + response.status)
    })
    .then((convertedResponse) => {
      setFriends(convertedResponse)
    })
    .catch((error) => {
      console.log(error)
    })

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '5b36af0bb4a50d14c05fd64327e212',
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id,
          title,
          imageUrl,
          creatorSlug
        }
      }`})
    })
    .then((response) => {
      if(response.ok) {
        return response.json()
      }
      throw new Error('Error fetching files :( ' + response.status)
    })
    .then((convertedResponse) => {
      setComunidades(convertedResponse.data.allCommunities)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
    

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
                title: dadosDoForm.get('title'),
                imageUrl: dadosDoForm.get('cover'),
                creatorSlug: githubUser
              }

              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newComunidade)
              })
              .then(async (res) => {
                const data = await res.json()
                const newComunidade = data.registroCriado
                const updatedComunidades = [...comunidades, newComunidade]
                setComunidades(updatedComunidades)
              })
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
                <li key={comunidade.id}>
                  <a href={`/communities/${comunidade.id}`}>
                    <img src={comunidade.imageUrl} />
                    <span>{comunidade.title}</span>
                  </a>
                </li>
              )  
            }) }
          </ul>
        </ProfileRelationsWrapper>
        <ProfileRelations 
          title='Crew'
          items={friends} 
        />
        </div>
      </MainWrapper>
    </>
  )
}
