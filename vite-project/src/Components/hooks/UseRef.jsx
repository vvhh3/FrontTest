import { useCallback,  useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { House} from 'lucide-react'
import NavButton from '../Home/NavButton';

import Title from '../Home/Title';

const UseRef = () => {
    let ref = useRef(0)

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleCleck = () => {
        ref.current = ref.current + 1
        alert(`Вы нажали кнопку ${ref.current}`)
    }

    const handleStart = useCallback(() => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
            console.log(intervalRef.current);
        }, 10);
    }, []);

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <div>
            <Title name={'useRef'}/>
            <NavButton title={'Home'} path={'/'} icon={<House />} />
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
