import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter, Navigate, Route, Routes, redirect} from "react-router-dom";
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'

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
        <Route path="/user" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/productList" element={<ProductList/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/newProduct" element={<NewProduct/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
