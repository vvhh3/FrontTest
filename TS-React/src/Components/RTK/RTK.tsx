// Импорт типизированных хуков Redux
import { useAppDispatch, useAppSelectot } from "./hooks"
// Импорт действия setUser для обновления состояния пользователя
import { setUser } from "./UserSlice"

// Импорт Zod для валидации схемы данных
import { z } from "zod"
// Импорт react-hook-form для управления формой
import { useForm } from "react-hook-form"
// Импорт интеграции react-hook-form с Zod
import { zodResolver } from "@hookform/resolvers/zod"

// Схема валидации формы с помощью Zod
const InputShema = z.object({
    // Имя: строка, обрезает пробелы, минимум 2 символа
    name: z.string().trim().min(2, "Имя обязательно"),
    // Возраст: число, минимум 18 лет
    age: z.number().min(18, "ограничения 18+")
})

// Тип данных формы, выведенный из схемы Zod
type InputType = z.infer<typeof InputShema>

// Компонент RTK для отображения и редактирования данных пользователя
const RTK = () => {

    // Получение данных пользователя из Redux store
    const user = useAppSelectot(state => state.user.user)
    // Получение функции dispatch для отправки действий
    const dispatch = useAppDispatch()

    // Инициализация react-hook-form с Zod-валидацией
    const {
        register,     // Регистрация полей формы
        handleSubmit, // Обработчик отправки формы
        formState: { errors, isSubmitting }, // Ошибки и статус отправки
        reset         // Сброс формы
    } = useForm<InputType>({
        resolver: zodResolver(InputShema),
        defaultValues: {
            name: "",
            age: 0
        },
        mode: "onBlur" // Валидация при потере фокуса
    })

    // Обработчик отправки формы: отправляет данные в Redux store
    const Submit = (data: InputType) => {
        dispatch(setUser({name: data.name,age: data.age }))
        reset() // Очистка формы после отправки
    }

    return (
        <div>
            {/* Отображение данных текущего пользователя */}
            <h1>User: {user?.name}</h1>
            <p>{user?.name}</p>
            <p>{user?.age}</p>

            {/* Форма для ввода имени и возраста пользователя */}
            <form onSubmit={handleSubmit(Submit)} className="flex flex-col gap-3">
                {/* Поле ввода имени */}
                <input placeholder="name" className="p-3 flex bg-black/10"
                    {...register("name")} />
                {/* Вывод ошибки валидации имени */}
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                {/* Поле ввода возраста */}
                <input placeholder="age" type="number" className="p-3 flex bg-black/10"
                    {...register("age",{
                        valueAsNumber: true // преобразовывает значение в number
                    })} />
                {/* Вывод ошибки валидации возраста */}
                {errors.age && <p className="text-red-500">{errors.age.message}</p>}

                {/* Кнопка отправки формы */}
                <button className="p-2 bg-red-500 cursor-pointer"
                    disabled={isSubmitting}>Изменить</button>
            </form>
        </div>
    )
}

export default RTK