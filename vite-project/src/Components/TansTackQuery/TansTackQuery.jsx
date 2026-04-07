import React from 'react';
import Title from '../Home/Title';
import NavButton from '../Home/NavButton';
import { House } from 'lucide-react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    return res.data; // ВСЕГДА возвращаем данные
}


const TansTackQuery = () => {

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
        staleTime: 5000, // 5 сек не перезапрашивает
    });

    if (isLoading) return <p>⏳ Загрузка...</p>;

    if (isError) return <p>❌ {error.message}</p>;
    return (
        <div>
            <Title name={"TansTack Query"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />

            <div className="p-4">

                <button
                    onClick={() => refetch()}
                    className=""
                >
                    🔄 Обновить
                </button>
                {isFetching && <p className="text-sm">🔄 Обновляем в фоне...</p>}

                <ul className="space-y-2">
                    {data.map((todo) => (
                        <li
                            key={todo.id}
                            className="p-2 border rounded-xl flex justify-between"
                        >
                            <span>{todo.title}</span>
                            <span>{todo.completed ? "✅" : "❌"}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TansTackQuery;
