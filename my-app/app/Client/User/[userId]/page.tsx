"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { use } from "react"

interface Address {
    street: string
    city: string
}

interface User {
    id: number
    name: string
    email: string
    addresses: Address[]
}


const users: User[] = [
    {
        id: 1,
        name: "Matvei",
        email: "matvei@test.com",
        addresses: [
            { street: "Ленина 10", city: "Минск" },
            { street: "Пушкина 5", city: "Москва" },
        ]
    },
    {
        id: 2,
        name: "Anna",
        email: "anna@test.com",
        addresses: [
            { street: "Советская 20", city: "Киев" },
        ]
    },
    {
        id: 3,
        name: "Ivan",
        email: "ivan@test.com",
        addresses: [
            { street: "Гагарина 15", city: "Новосибирск" },
            { street: "Мира 8", city: "Казань" },
            { street: "Лесная 3", city: "Сочи" },
        ]
    }
]

const UserPage = ({ params }: { params: Promise <{ userId: string }> }) => {

    const { userId } =  use(params)

    const user = users.find(u => u.id === Number(userId))
    
    const pathName = usePathname()
    console.log("pathName", pathName)

    if (!user) return <div className="p-4 text-red-500">Пользователь не найден</div>

    return (
        <div className="p-4">
            <Link href="/Client/User" className="text-blue-400 hover:text-blue-600">
                Обратно
            </Link>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p>{user.email}</p>

            <h2 className="text-xl mt-4">Адреса ({user.addresses.length}):</h2>
            {user.addresses.map((addr, i) => (
                <div key={i} className="ml-4">
                    {addr.street}, {addr.city}
                </div>
            ))}
        </div>
    )
}

export default UserPage