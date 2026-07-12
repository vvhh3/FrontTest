import { useAppDispatch, useAppSelectot } from "./hooks"
// import { setUser } from "./UserSlice"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserApi } from "./UserApi"

// Схема валидации формы с помощью Zod
const InputShema = z.object({
    name: z.string().trim().min(2, "Имя обязательно"),
    age: z.number().min(18, "ограничения 18+")
})

// Тип данных формы, выведенный из схемы Zod
type InputType = z.infer<typeof InputShema>

const RTK = () => {

    const { users, loading, error } = useAppSelectot(state => state.user)

    const dispatch = useAppDispatch()

    // const {
    //     register,     // Регистрация полей формы
    //     handleSubmit, // Обработчик отправки формы
    //     formState: { errors, isSubmitting }, // Ошибки и статус отправки
    //     reset         // Сброс формы
    // } = useForm<InputType>({
    //     resolver: zodResolver(InputShema),
    //     defaultValues: {
    //         name: "",
    //         age: 0
    //     },
    //     mode: "onBlur" // Валидация при потере фокуса
    // })

    // Обработчик отправки формы: отправляет данные в Redux store
    // const Submit = (data: InputType) => {
    //     dispatch(setUser({ name: data.name, age: data.age }))
    //     reset() // Очистка формы после отправки
    // }

    return (
        <div>
            {/* Отображение данных текущего пользователя */}
            {/* <h1>User: {user?.name}</h1>
            <p>{user?.name}</p>
            <p>{user?.age}</p>

            <form onSubmit={handleSubmit(Submit)} className="flex flex-col gap-3">
                <input placeholder="name" className="p-3 flex bg-black/10"
                    {...register("name")} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <input placeholder="age" type="number" className="p-3 flex bg-black/10"
                    {...register("age", {
                        valueAsNumber: true // преобразовывает значение в number
                    })} />
                {errors.age && <p className="text-red-500">{errors.age.message}</p>}

                <button className="p-2 bg-red-500 cursor-pointer"
                    disabled={isSubmitting}>Изменить</button>
            </form> */}
            
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