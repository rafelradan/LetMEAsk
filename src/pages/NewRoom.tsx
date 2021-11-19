import {FormEvent, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

import { getDatabase, push, ref, set } from 'firebase/database'

import illustrationImg from '../img/illustration.svg'
import logoImg from '../img/logo.svg'
import '../styles/newroom.scss'

import { Button } from '../components/Button'
import { useAuth } from '../contexts/AuthContext'


export function NewRoom() {
  const {user} = useAuth()
  const navigate = useNavigate()

  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()
   
    if (newRoom.trim() === '') {
      return alert('Type the room name')
    }

    /* Gravando dados no banco FireBase */
    const db = getDatabase()
    const roomsRef = ref(db, 'rooms')
    const newRoomName = push(roomsRef)
   await set(newRoomName, {
      userName: user?.name,
      roomName: newRoom,
      authorId:user?.id
    })
    
    navigate(`/rooms/${newRoomName.key}`)

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
          {/* <h1>{user?.name}</h1> */}
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom} >
            <input 
            id="inpNewNameRoom"
            type="text" 
            placeholder="Nome da sala"
            onChange={(e) => {setNewRoom(e.target.value)}}
            /* value={newRoom} */
            
            />
            <Button type="submit">
              Criar sala
            </Button>
            
          </form>
          <p>Quer entrar em uma sala exixtente?</p> 
          <Link to="/">Clique aqui!</Link>

        </div>
      </div>

    </div>

  )
}