import { BrowserRouter, Route, Routes, redirect} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user:any = useSelector((state:any) => state.user.currentUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product/>}/>

        {!user ? (
              <Route  path="/login" element={<Login />} />
            ) : (
              <Route  path="/" element={<Home />} />
            )}
        {/* <Route path="/signin">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register"
          {...user ? <Redirect to="/" /> : <Register />}
          ></Route> */}
        <Route path="/success" element={<Success/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
