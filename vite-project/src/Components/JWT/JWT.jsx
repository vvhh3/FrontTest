import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <div>
      <div className='bg-red-500 p-4 text-white'>
        JWT
      </div>
      <div className='bg-gray-300 w-20 m-2'>
        <Link to="/" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Home</Link>
      </div>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border-2 border-pink-800" />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border-2 border-pink-800 ml-2" />
      <button onClick={register} className='bg-gray-300 p-1 ml-2'>Register</button>
      <button onClick={login} className='bg-gray-300 p-1 ml-2'>Login</button>

      {profile && 
      <div className="mt-5">
        <h2>Profile</h2>
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </div>}
    </div>
  );
}

export default JWT;