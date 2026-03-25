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
import JWT from './Components/JWT/JWT';
import UseRef from './Components/hooks/UseRef';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Zustand' element={<Zustand/>}/>
          <Route path='/RTK' element={<ReduxTk/>}/>
          <Route path='/Redis' element={<Front/>}/>
          <Route path='/JWT' element={<JWT/>}/>
          <Route path='/Ref' element={<UseRef/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
