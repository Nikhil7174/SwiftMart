import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/topbar/TopBar'
import SideBar from './components/sidebar/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TopBar/>
        <div className='container'>
        <SideBar/>
        <div className='others'>others</div>
      {/* <BrowserRouter>
        <Routes>
        
        <Route path="/success" element={<Success/>}/>
      </Routes>
      </BrowserRouter> */}
      </div>
      </div>
    </>
  )
}

export default App
