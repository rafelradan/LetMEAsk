
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider, } from './contexts/AuthContext'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'




function App() {
   
  
  return (
    <BrowserRouter>
     <AuthProvider>
        <Routes>
          
            <Route path="/"  element={<Home />} />
            <Route path="/new/room" element={<NewRoom />} />
            <Route path="/rooms/:id" element={<Room />} />
            
          
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default App
//0:26