import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5001/api/value";

const Front = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("11");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setValue(res.data.value))
      .catch(() => setValue("Ошибка загрузки"));
  }, []);

  const saveValue = async () => {
    try {
      await axios.post(API_URL, { value: input });
      setValue(input);
      setInput("");
    } catch {
      setValue("Ошибка сохранения");
    }
  };

  const delValue = async () => {
    try {
      await axios.delete(API_URL);
      setValue("Пусто");
    } catch {
      setValue("Ошибка удаления");
    }
  };

  return (
    <div>
      <div className="bg-black p-4 text-white dark:bg-white dark:text-black">
        Redis
      </div>
      <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600 dark:m-2 hover:bg-red-950 dark:hover:bg-red-200  dark:bg-white'>
        <Link to="/" className="no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600 flex justify-between">Home</Link>
      </div>
      <h1>React + Node + Redis</h1>
      <p>
        Сохранённое значение: <b>{value}</b>
      </p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите что-то"
        className="border-1 border-cyan-600"
      />

      <button onClick={saveValue} className="ml-2 bg-gray-300 p-1">
        Сохранить
      </button>
      <button onClick={delValue} className="ml-2 bg-gray-300 p-1">
        Удалить
      </button>
    </div>
  );
};

export default Front;
