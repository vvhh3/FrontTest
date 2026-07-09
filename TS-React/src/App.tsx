import { useCallback, useState } from 'react'
import Test from './Components/Test'
import Radix from './Components/Radix';
import Motion from './Components/Motion'

function App() {
  const [count, setCount] = useState<number>(0)


  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <>
      <Test title='MatveyTop' onClick={handleClick} count={count} />
      {/* <Radix/> */}
      <Motion/>
      
    </>
  )
}

export default App
