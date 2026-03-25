import  { useRef,useState } from 'react';
import { Link } from 'react-router-dom';

const UseRef = () => {
    let ref = useRef(0)
    
    
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    
    const handleCleck = () => {
        ref.current = ref.current + 1
        alert(`Вы нажали кнопку ${ref.current}`)
    }
    
    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <div>
            <div className='bg-red-500 text-white text-[20px] p-4'>
                useRef
            </div>
            <div className='bg-gray-300 w-20 mb-2 mt-2'>
                <Link to="/" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Home</Link>
            </div>
            <button onClick={handleCleck} className='bg-gray-400 p-1 m-1 duration-500 hover:bg-red-500'>+ 1 ref</button>

            <h1>Прошло времени: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart} className='bg-gray-400 p-1 m-1 duration-500 hover:bg-red-500'>
                Старт
            </button>
            <button onClick={handleStop} className='bg-gray-400 p-1 m-1 duration-500 hover:bg-red-500'>
                Стоп
            </button>
        </div>
    );
}

export default UseRef;
