import {useNavigate} from 'react-router-dom';
import { child, get, getDatabase,  ref,  } from 'firebase/database'

import '../styles/auth.scss'
import illustrationImg from '../img/illustration.svg'
import logoImg from '../img/logo.svg'
import googleImgIcon from '../img/google-icon.svg'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext';
import { FormEvent, useState } from 'react';


export function Home() {
  const navigate = useNavigate()
  const { user, signInWithgoogle} = useAuth()
  const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom() {
        if (!user) {
          await signInWithgoogle()
        }

        navigate("/new/room")
      }

 
      async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (roomCode.trim() === '') {
          return
        }

        const dbRef = ref(getDatabase());
          get(child(dbRef, `rooms/${roomCode}`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              navigate(`/rooms/${roomCode}`)
            } else {
              alert('Room does not exist')
              
            }
          }).catch((error) => {
            console.error(error);
          });
        
      }

  return(
      <div id="page-auth">
            <div id="left" >
              <img src={illustrationImg} alt="Illustração" />
              <strong>Crie salas de Q&amp;A ao vivo</strong>
              <p>Tire as dúvidas da sua audiência em tempo real</p>
            </div>

            <div id="writh" >
              <div className="main-content">
                <img src={logoImg} alt="Logo LetMeAsk" />
                <button className="create-room" onClick={handleCreateRoom} >
                  <img src={googleImgIcon} alt="Logo do google" />
                  Crie sua sala com o Google
                </button>

                <div className="separator">ou entre em uma sala</div>

                <form onSubmit={handleJoinRoom} >
                  <input 
                  type="text" 
                  placeholder="Digite o código da sala"
                  onChange={(e) => {setRoomCode(e.target.value)}}
                  />
                  <Button  type="submit" >
                    Entrar na sala
                  </Button>

                  
                </form>

              </div>
            </div>

    </div>

  )
}