import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().trim().min(1, "Email обязателен").email("Некорректный email"),
    password: z.string().trim().min(6, "Минимум 6 символов"),
    age: z.number().refine(
        age => age % 2 === 0,
        {
            message: "Возраст должен быть четным"
        }
    ),
    name: z.union([z.string() , z.number()]), // union - объединение нескольких типов
    status: z.union([z.literal("active") , z.literal("inactive"), z.literal(67)]), //literal - конкретное значение
    //url: z.string().trim().url("Некорректный URL"),
    //date: z.string().datetime()
})

//refine() - Используется когда встроенных проверок недостаточно
//superRefine() - Нужен если нужно сравнивать несколько полей


//Если нужно сделать необязательным:
// z.string().optional() - string | undefined
// z.string().nullable() - string | null
// z.string().nullish() - string | null | undefined


type LoginFormData = z.infer<typeof loginSchema>;

export function RHFandZod() {
    const {
        register,
        watch,
        handleSubmit, // handlesubmit - сама вызывает e.preventDefault()
        formState: { errors, isSubmitting },
        reset
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema), //resolver связывает React Hook Form и Zod, поэтому при отправке формы данные автоматически проверяются по схеме
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur"
    })
    // onSubmit - ошибки появятся только после нажатия Submit
    // onBlur - Ошибки появляются, когда пользователь ушел из поля.
    // onChange - Каждый символ вызывает валидацию
    // onTouched - Сначала пользователь один раз покинул поле ,После этого оно начинает валидироваться на каждый ввод
    // all - Валидация происходит вообще всегда


    // watch() позволяет получать значения полей в реальном времени, не дожидаясь отправки формы
    const email = watch("email")
    console.log(email)

    const values = watch() //получить все поля сразу
    console.log(values)

    //watch vs useWatch - useWatch позволяет получать значения полей в реальном времени, но без перерисовки компонента. watch вызывает перерисовку компонента при каждом изменении значения поля.

    const onSubmit = async (data: LoginFormData) => {
        console.log(data)

        await new Promise(r => setTimeout(r, 2000))
        reset()
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex max-w-sm flex-col gap-4">
            <div>
                <input
                    {...register("email")}
                    placeholder="Email"
                    className="w-full rounded border p-2" />

                {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    {...register("password")}
                    placeholder="Пароль"
                    className="w-full rounded border p-2" />

                {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <button
                disabled={isSubmitting}
                className="rounded bg-blue-600 p-2 text-white disabled:opacity-50" >
                {isSubmitting ? "Отправка..." : "Войти"}
            </button>
        </form>
    )
}

// | API               | Для чего нужен                                                                        |
// | ----------------- | ------------------------------------------------------------------------------------- |
// | `watch()`         | Следить за значениями полей в реальном времени                                        |
// | `setValue()`      | Программно изменить значение поля                                                     |
// | `getValues()`     | Получить текущие значения формы                                                       |
// | `reset()`         | Сбросить всю форму                                                                    |
// | `resetField()`    | Сбросить одно поле                                                                    |
// | `setError()`      | Программно установить ошибку (например, после ответа сервера)                         |
// | `clearErrors()`   | Очистить ошибки                                                                       |
// | `trigger()`       | Запустить валидацию вручную                                                           |
// | `Controller`      | Подключить контролируемые компоненты (например, Radix, MUI, React Select, DatePicker) |
// | `useFieldArray()` | Работать с динамическими списками полей (телефоны, адреса, навыки)                    |
