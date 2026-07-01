"use client"
import Link from "next/link"

export default function UserList() {
    const users = [
        { id: 1, name: "Matvei" },
        { id: 2, name: "Anna" },
        { id: 3, name: "Ivan" },
    ]

    return (
        <div className="p-4">
            <Link href="/Client" className="text-blue-400 hover:text-blue-600">
                Обратно
            </Link>
            <h1 className="text-2xl font-bold mb-4">Выбери пользователя:</h1>
            {users.map(u => (
                <Link
                    key={u.id}
                    href={`/Client/User/${u.id}`}
                    className="block text-blue-400 hover:text-blue-600 mb-2" >
                    {u.name}
                </Link>
            ))}
        </div>
    )
}
