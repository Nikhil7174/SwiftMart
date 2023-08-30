import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter, Navigate, Route, Routes, redirect } from "react-router-dom";
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'

function App() {
  const admin = useSelector((state:any) => state.user.currentUser.isAdmin);
  return (
    <>
      <div>
        <BrowserRouter>

          {admin ? (
            <>
              <TopBar />
              <div className="container">

                <SideBar />
                <Routes>
                  <Route path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
                  <Route path="/" element={admin ? <Home/> : <Login />} />
                  {/* <Route path="/users" element={admin ? <Users/> : <Login />} /> */}
                  <Route path="/user" element={admin ? <User /> : <Login />} />
                  <Route path="/newUser" element={admin ? <NewUser /> : <Login />} />
                  <Route path="/productList" element={admin ? <ProductList /> : <Login />} />
                  <Route path="/product/:productId" element={admin ? <Product /> : <Login />} />
                  <Route path="/newProduct" element={admin ? <NewProduct /> : <Login />} />
                </Routes>
              </div>
            </>) : <Routes>
            <Route path="/login" element={ <Login />} />
                  <Route path="/" element={!admin ? <Navigate to="/login"/> : <Home />} />
                  {/* <Route path="/users" element={!admin ? <Navigate to="/login"/> : <Users />} /> */}
                  <Route path="/user" element={!admin ? <Navigate to="/login"/> : <User />} />
                  <Route path="/newUser" element={!admin ? <Navigate to="/login"/> : <NewUser />} />
                  <Route path="/productList" element={!admin ? <Navigate to="/login"/> : <ProductList />} />
                  <Route path="/product/:productId" element={!admin ? <Navigate to="/login"/> : <Product />} />
                  <Route path="/newProduct" element={!admin ? <Navigate to="/login"/> : <NewProduct />} />
          </Routes>}

        </BrowserRouter>


      </div>
    </>
  )
}

export default App
