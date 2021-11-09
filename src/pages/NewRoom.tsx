import { Link } from 'react-router-dom'

import illustrationImg from '../img/illustration.svg'
import logoImg from '../img/logo.svg'
import '../styles/auth.scss'

import { Button } from '../components/Button'
import { useContext } from 'react'
import { AuthContext } from '../App'


export function NewRoom() {
  const { user,  } = useContext(AuthContext)

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustração" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo LetMeAsk" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form >
            <input 
            type="text" 
            placeholder="Nome da sala"
            
            />
            <Button type="submit">
              Criar sala
            </Button>
            
          </form>
          <p>Quer entrar em uma sala exixtente?</p> 
          <Link to="/">Clique aqui!</Link>

        </div>
      </main>

    </div>

  )
}