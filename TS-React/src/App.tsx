import { useCallback, useState } from 'react'
import Test from './Components/Test'
function App() {
  const [count,setCount] = useState<number>(0)
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <>
      <Test title='MatveyTop' onClick={handleClick} count={count}/>
    </>
  )
}

export default App
