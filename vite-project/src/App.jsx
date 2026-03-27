import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Components/Home/Home';
import Zustand from './Components/zustand/Zustand';
import ReduxTk from './Components/ReduxToolKit/ReduxTk';
import Front from './Components/Redis/Front';
import JWT from './Components/JWT/JWT';
import UseRef from './Components/hooks/UseRef';
import { useTheme } from './Components/hooks/UseContext';

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-zinc-900 dark:text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Текущая тема: <b>{theme}</b>
          </p>

          <button
            onClick={toggleTheme}
            className="rounded-xl border border-zinc-300 bg-black px-4 py-2 text-white transition-colors duration-300 hover:opacity-90 dark:border-zinc-600 dark:bg-white dark:text-black"
          >
            {theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
          </button>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Zustand' element={<Zustand />} />
          <Route path='/RTK' element={<ReduxTk />} />
          <Route path='/Redis' element={<Front />} />
          <Route path='/JWT' element={<JWT />} />
          <Route path='/Ref' element={<UseRef />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
