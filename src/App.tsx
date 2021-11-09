import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

function App() {
 
    
  
  return (
    <BrowserRouter>
     <AuthProvider>
        <Routes>
      
            <Route path="/"  element={<Home />} />
            <Route path="/new/room" element={<NewRoom />} />
        
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default App
//1:16