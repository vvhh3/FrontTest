import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { House } from 'lucide-react'
const JWT = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);

  const register = async () => {
    await axios.post("http://localhost:5000/register", { username, password });
    alert("Registered!");
  };

  const login = async () => {
    const res = await axios.post("http://localhost:5000/login", { username, password });
    localStorage.setItem("token", res.data.token);
    alert("Logged in!");
    getProfile()
  };

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/profile", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setProfile(res.data.user);
  };

  return (
    <div className="w-full">
      <div className="bg-black text-white p-4 dark:bg-white dark:text-black ">
        JWT
      </div>
      <div className="w-full">
        <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600 dark:m-2 hover:bg-red-950 dark:hover:bg-red-200  dark:bg-white'>
          <Link to="/" className='no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600 flex justify-between'>
            Home <House />
          </Link>
        </div>
        <section className="flex w-full items-center justify-center flex-col p-4">
          <input placeholder="Username"
            className="border-2 w-[50vh] border-pink-800 p-4 m-4 rounded-2xl dark:bg-white dark:text-black"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input placeholder="Password"
            className="border-2 w-[50vh] border-pink-800 p-4 m-4 rounded-2xl dark:bg-white dark:text-black"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className='bg-black w-[50vh] max-w-2xl  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600 dark:m-2 hover:bg-red-950 dark:hover:bg-red-200  dark:bg-white'>
            <button onClick={register} className='no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600 flex justify-between'>
              Register
            </button>
          </div>
          <div className='bg-black w-[50vh] max-w-2xl  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600 dark:m-2 hover:bg-red-950 dark:hover:bg-red-200  dark:bg-white'>
            <button onClick={login} className='no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600 flex justify-between'>
              Login
            </button>
          </div>
        </section>
      </div>

      {profile &&
        <div className="mt-5">
          <h2>Profile</h2>
          <p>{JSON.stringify(profile, null, 2)}</p>
        </div>}
    </div>
  );
}

export default JWT;