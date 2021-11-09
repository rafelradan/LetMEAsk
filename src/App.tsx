import { createContext, useState} from "react";
import {  Route, Routes, BrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import appFireBase from "./services/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"


type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  signInWithgoogle: () => Promise<void>
}

export const AuthContext= createContext({} as AuthContextType)

function App() {
 const [user, setUser] = useState<User>()
 const auth = getAuth()

  async function signInWithgoogle(){
    const provider = new GoogleAuthProvider()

    const name = appFireBase.name
    console.log(name)

    const result = await signInWithPopup(auth, provider)

    GoogleAuthProvider.credentialFromResult(result)
   
      if (result.user) {
          const {displayName, photoURL, uid} = result.user

          if (!displayName || !photoURL) {
              throw new Error('Missing some information from Google.')
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
          })

       }

      console.log(user?.name)
    
  }
    
   console.log('App Context', signInWithPopup);
  
  return (
    <BrowserRouter>
    <Routes>
      <AuthContext.Provider value={{user, signInWithgoogle }} >
        <Route path="/"  element={<Home />} />
        <Route path="/new/room" element={<NewRoom />} />
      </AuthContext.Provider>
    </Routes>
  </BrowserRouter>
  )
}

export default App
//1:16