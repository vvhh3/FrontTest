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
import Front from './Components/Redis/Front';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Zustand' element={<Zustand/>}/>
          <Route path='/RTK' element={<ReduxTk/>}/>
          <Route path='/Redis' element={<Front/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
