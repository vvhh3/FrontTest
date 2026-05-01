import React, { useState } from 'react'
import Title from "../Home/Title"
import { House } from "lucide-react"
import NavButton from "../Home/NavButton"
import axios from "axios"

const token = import.meta.env.VITE_GITHUB_TOKEN

const GitHub = () => {
    const [repos, setRepos] = useState([])

    const getPubRepos = async () => {
        try {
            const res = await axios.get(
                "https://api.github.com/users/vvhh3/repos"
            );
            console.log("res", res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getAllRepos = async () => {
        try {
            const res = await axios.get("https://api.github.com/user/repos", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github+json",
                },
            }
            )
            setRepos(res.data)
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Title name={"GitHub"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <button onClick={getAllRepos} className='bg-gray-400 w-full h-20 rounded-2xl'>Получить все репозитории с github</button>
            {repos.map(r => (
                <div key={r.id}>
                    <p>id: {r.id}</p>
                    <p>created_at: {r.created_at}</p>
                    <p>language: {r.language}</p>
                    <p>name: {r.name}</p>
                    <p>owner: {r.owner.login}</p>
                    <p>-----------------------</p>
                </div>
            ))}
        </div>
    )
}

export default GitHub