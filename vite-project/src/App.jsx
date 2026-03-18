import { useState } from 'react'
import './App.css'
import {
  BrowserRouter ,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Components/Home/Home';
import Zustand from './Components/zustand/Zustand';
import ReduxTk from './Components/ReduxToolKit/ReduxTk';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Zustand' element={<Zustand/>}/>
          <Route path='/RTK' element={<ReduxTk/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
