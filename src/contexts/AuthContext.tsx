import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState} from "react";
import appFireBase from "../services/firebase";

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  signInWithgoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>()
  const auth = getAuth()

 useEffect(() =>{
  const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const  {displayName, photoURL, uid} = user
        
        if (!displayName || !photoURL) {
          throw new Error('Missing some information from Google.')
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
      
    })
    return () => {
      unsubscribe()
    }
})

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

  return(
    <AuthContext.Provider value={{user, signInWithgoogle}}>
      {children}

    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
}
