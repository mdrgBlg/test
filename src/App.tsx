import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Users } from "./pages/userPage"
import { Posts } from "./pages/postPage"




function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="posts" element={<Posts />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
