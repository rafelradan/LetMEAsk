import {useNavigate} from 'react-router-dom';

import '../styles/auth.scss'
import illustrationImg from '../img/illustration.svg'
import logoImg from '../img/logo.svg'
import googleImgIcon from '../img/google-icon.svg'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext';

/* import appFireBase from '../services/firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"; */

export function Home() {
  const navigate = useNavigate()
  const { user, signInWithgoogle} = useAuth()

 async function handleCreateRoom() {
    if (!user) {
      /* console.log(signInWithgoogle) */
       await signInWithgoogle()
      
    }

    navigate("/new/room")
  }

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
          <button className="create-room" onClick={handleCreateRoom} >
            <img src={googleImgIcon} alt="Logo do google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form >
            <input 
            type="text" 
            placeholder="Digite o código da sala"
            
            />
            <Button  type="submit" >
              Entrar na sala
            </Button>

          </form>

        </div>
      </main>

    </div>

  )
}