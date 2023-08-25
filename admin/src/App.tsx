import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter, Navigate, Route, Routes, redirect} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TopBar/>
        <div className='container'>
        <SideBar/>
        
        <div className='others'>
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
