import React, { useEffect, useState } from 'react'
import Title from "../Home/Title"
import { House } from "lucide-react"
import NavButton from "../Home/NavButton"
import axios from "axios"

const token = import.meta.env.VITE_GITHUB_TOKEN

const GitHub = () => {
    const [repos, setRepos] = useState([])

    const [loading, setLoading] = useState(false)

    const getPubRepos = async () => { // получить только публичные репозитории
        try {
            const res = await axios.get(
                "https://api.github.com/users/vvhh3/repos"
            );
            console.log("res", res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getAllRepos = async () => { // получить все репозитории, включая приватные (требуется токен)
        try {
            setLoading(true)
            const res = await axios.get("https://api.github.com/user/repos", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github+json",
                },
                params: {//что бы вытягивать все репозитории
                    per_page: 100
                }
            }
            )
            // console.log(res.data)
            setTimeout(() => {
                setLoading(false)
            }, 3000)
            setRepos(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllRepos()
    }, [])

    return (
        <div >
            <Title name={"GitHub"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <button onClick={getAllRepos} className='bg-gray-400 w-1/9 h-10 m-5 rounded-2xl'>{loading ? "Загрузка..." : "Посмотреть репозитории"}</button>

            <div className="min-h-screen bg-[#0b0f19] px-6 py-10 text-white">
                <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {repos.map((repo) => (
                        <div
                            key={repo.id}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg transition hover:-translate-y-1 hover:bg-white/10"
                        >
                            <div className="mb-4 flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-xl font-bold">{repo.name}</h3>
                                    <p className="mt-1 text-sm text-white/50">
                                        {repo.private ? "Private" : "Public"}
                                    </p>
                                </div>

                                <img
                                    src={repo.owner.avatar_url}
                                    alt={repo.owner.login}
                                    className="h-10 w-10 rounded-full"
                                />
                            </div>

                            <p className="mb-5 min-h-12 text-sm text-white/70">
                                {repo.description || "Описание не добавлено"}
                            </p>

                            <div className="mb-5 flex flex-wrap gap-2 text-sm">
                                <div className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">
                                    {repo.language}
                                </div>

                                <div className="rounded-full bg-white/10 px-3 py-1">
                                    Forks: {repo.forks_count}
                                </div>

                                <div className="rounded-full bg-white/10 px-3 py-1">
                                    Watchers: {repo.watchers_count}
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-3">
                                <span className="text-xs text-white/40">
                                    {new Date(repo.created_at).toLocaleDateString()}
                                </span>

                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-blue-200"
                                >
                                    Открыть
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default GitHub