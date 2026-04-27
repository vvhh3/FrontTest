import Title from '../Home/Title';
import NavButton from '../Home/NavButton';
import { House } from 'lucide-react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import TestCRUD from './TestCRUD';

const fetchData = async () => {
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );

    return res.data; // ВСЕГДА возвращаем данные
}


const TansTackQuery = () => {

    //const { data, isLoading } = useQuery({
    //   queryKey: ["todos", userId], //уникальный ключ запроса
    //   queryFn: fetchTodos, //функция, которая делает запрос
    //   enabled: !!userId, // пока userId пустой → запрос НЕ идёт
    //   staleTime: 1000 * 60, // сколько данные считаются свежими
    //   cacheTime: 1000 * 60 * 5, // сколько хранить кеш после ухода компонента
    //   retry: 2, // сколько раз повторять при ошибке
    //   refetchOnWindowFocus: true, //обновляет данные при возврате на вкладку
    //   select: (data) => data.slice(0, 5), //изменяет данные перед тем как отдать в компонент
    //   refetchInterval: 5000 //авто-обновление каждые 5 сек
    // })

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchData,
        staleTime: 5000,
    });

    
    if (isError) return <p>❌ {error.message}</p>
    
    return (
        <div>
            <Title name={"TansTack Query"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />

            {isLoading ? <>
                <p>⏳ Загрузка...</p>
            </> : <>

                <div className="p-4">

                    <button
                        onClick={() => refetch()}
                        className="bg-black text-white p-3 rounded-2xl w-full mb-5 
                    dark:bg-gray-800 dark:border dark:border-gray-300 dark:text-white hover:scale-101 transition"
                    >
                        🔄 Обновить
                    </button>
                    {isFetching && <p className="text-sm">🔄 Обновляем в фоне...</p>}

                    <ul className="space-y-2">
                        {data.map((todo) => (
                            <li
                                key={todo.id}
                                className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md"
                            >
                                <span className='text-2xl font-bold'>{todo.title}</span>
                                <span>{todo.completed ? "✅" : "❌"}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </>}
            <TestCRUD/>
        </div>
    );
}

export default TansTackQuery;
