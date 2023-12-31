import './App.css'
import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'
import Home from './pages/home/Home'
// import UserList from './pages/userList/UserList'
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'

function App() {
  let user:any = useSelector((state:any) => state.user.currentUser);
  let admin;
  if( user !== null){
   admin = useSelector((state:any) => state.user.currentUser.isAdmin);
  }

  // console.log(admin)
  // console.log(user)
  return (
    <>
      <div>
        <BrowserRouter>

          {(admin !== null && admin === true) ? (
            <>
              <TopBar />
              <div className="container">

                <SideBar />
                <Routes>
                  <Route path="/" element={admin ? <Home/> : <Login />} />
                  <Route path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
                  
                  {/* <Route path="/users" element={admin ? <Users/> : <Login />} /> */}
                  <Route path="/newUser" element={admin ? <User /> : <Login />} />
                  {/* <Route path="/users" element={admin ? <UserList /> : <Login />} /> */}
                  <Route path="/newUser" element={admin ? <NewUser /> : <Login />} />
                  <Route path="/products" element={admin ? <ProductList /> : <Login />} />
                  <Route path="/product/:productId" element={admin ? <Product /> : <Login />} />
                  <Route path="/newProduct" element={admin ? <NewProduct /> : <Login />} />
                </Routes>
              </div>
            </>) : <Routes>
            <Route path="/login" element={ <Login />} />
                  <Route path="/" element={!admin ? <Navigate to="/login"/> : <Home />} />
                  {/* <Route path="/users" element={!admin ? <Navigate to="/login"/> : <Users />} /> */}
                  {/* <Route path="/user" element={!admin ? <Navigate to="/login"/> : <User />} /> */}
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
