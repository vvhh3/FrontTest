import { useAppDispatch, useAppSelectot } from "./hooks"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserApi } from "./UserApi"
import { editUser } from "./UserSlice"

// Схема валидации формы с помощью Zod
const InputShema = z.object({
    name: z.string().trim().min(2, "Имя обязательно"),
    username: z.string().trim().min(2, "Фамилия обязательна")
})

// Тип данных формы, выведенный из схемы Zod
type InputType = z.infer<typeof InputShema>

const RTK = () => {

    const {user, users, loading, error } = useAppSelectot(state => state.user)

    const dispatch = useAppDispatch()

    const {
        register,     // Регистрация полей формы
        handleSubmit, // Обработчик отправки формы
        formState: { errors, isSubmitting }, // Ошибки и статус отправки
        reset         // Сброс формы
    } = useForm<InputType>({
        resolver: zodResolver(InputShema),
        defaultValues: {
            name: "",
            username: ""
        },
        mode: "onBlur" // Валидация при потере фокуса
    })

    // Обработчик отправки формы: отправляет данные в Redux store
    const Submit = (data: InputType) => {
        dispatch(editUser({id: 1, name: data.name, username: data.username,email: "12" }))
        reset() // Очистка формы после отправки
    }

    return (
        <div>
            {/* Отображение данных текущего пользователя */}
            <h1>User: {user?.name}</h1>
            <p>{user?.name}</p>
            <p>{user?.username}</p>

            <form onSubmit={handleSubmit(Submit)} className="flex flex-col gap-3">
                <input placeholder="name" className="p-3 flex bg-black/10"
                    {...register("name")} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <input placeholder="username" className="p-3 flex bg-black/10"
                    {...register("username",
                    //      {
                    //     valueAsNumber: true // преобразовывает значение в number
                    // }
                    )} />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}

                <button className="p-2 bg-red-500 cursor-pointer"
                    disabled={isSubmitting}>Изменить</button>
            </form>
            
            <button
                onClick={() => dispatch(UserApi())}
            >
                Загрузить пользователей
            </button>

            {loading && <h2>Загрузка...</h2>}

            {error && <h2>{error}</h2>}
            {users && <div>
                {users.map(user => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default RTK