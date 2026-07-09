import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email обязателен").email("Некорректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
})

type LoginFormData = z.infer<typeof loginSchema>;

export function RHFandZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema), //resolver связывает React Hook Form и Zod, поэтому при отправке формы данные автоматически проверяются по схеме
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data)

    await new Promise(r => setTimeout(r,2000))
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-sm flex-col gap-4">
      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full rounded border p-2"
        />

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
  );
}