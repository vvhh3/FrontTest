import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";


const API = "https://dummyjson.com/posts";

// ===== API функции =====
const fetchPosts = async () => {
    const res = await axios.get(`${API}?limit=5`);
    console.log("📦 Полученные данные:", res.data); // Для отладки
    return res.data.posts; // ⚠️ Извлекаем массив posts!
}

const addPost = async (title) => {
    const res = await axios.post(`${API}/add`, {
        title,
        body: "Описание...",
        userId: 1,
        tags: ["todo"],
    });
    return res.data;
}

const deletePost = async (id) => {
    await axios.delete(`${API}/${id}`);
    return id;
}

// ===== COMPONENT =====
const TanStackCRUD = () => {
    const queryClient = useQueryClient();
    const [input, setInput] = useState("");

    // ===== GET =====
    const {
        data: posts = [],
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
    });

    // ===== CREATE =====
    const createMutation = useMutation({
        mutationFn: addPost,
        onSuccess: (newPost) => {
            queryClient.setQueryData(["posts"], (old) => {
                if (!old) return [newPost];
                return [newPost, ...old];
            });
        },
        onError: (error) => {
            console.error("❌ Ошибка создания:", error);
        },
    });

    // ===== DELETE =====
    const deleteMutation = useMutation({
        mutationFn: deletePost,
        onMutate: async (id) => {  //onMutate — срабатывает до запроса на сервер
            // 1. Отменяем все текущие запросы по этому ключу, чтобы не было конфликтов
            await queryClient.cancelQueries(["posts"]);
            // 2. Сохраняем текущее состояние кэша (для отката при ошибке)
            const prev = queryClient.getQueryData(["posts"]);

            // 3. Мгновенно обновляем интерфейс: убираем пост из списка
            queryClient.setQueryData(["posts"], (old) =>
                old?.filter((p) => p.id !== id)  // Оставляем все посты, кроме удаляемого
            );
            // 4. Возвращаем предыдущее состояние в контекст (доступно в onError)
            return { prev };
        },
        onError: (err, id, context) => {
            // Откатываем кэш к предыдущему состоянию
            queryClient.setQueryData(["posts"], context.prev);
        },
        onSettled: () => { // onSettled — срабатывает всегда (успех или ошибка)
            queryClient.invalidateQueries(["posts"]);
        },
    });

    if (isLoading) {
        return (
            <div className="p-4 text-center">
                <p>⏳ Загрузка...</p>
                <button
                    onClick={() => refetch()}
                    className="mt-2 text-blue-500 underline"
                >
                    Повторить
                </button>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-4 text-center">
                <p className="text-red-500">❌ Ошибка: {error?.message}</p>
                <button
                    onClick={() => refetch()}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    🔄 Повторить
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">📦 CRUD Posts</h1>

            {/* CREATE */}
            <div className="flex gap-2 mb-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-2 flex-1 rounded dark:bg-gray-800 dark:border-gray-600"
                    placeholder="Новый пост..."
                />
                <button
                    onClick={() => {
                        if (!input.trim()) return;
                        createMutation.mutate(input.trim());
                        setInput("");
                    }}
                    disabled={createMutation.isPending}
                    className="bg-black text-white px-4 rounded disabled:opacity-50"
                >
                    {createMutation.isPending ? "⏳" : "➕"}
                </button>
            </div>

            {/* LIST */}
            <ul className="space-y-2">
                {posts.length === 0 ? (
                    <li className="text-gray-500 text-center py-4">
                        📭 Нет постов
                    </li>
                ) : (
                    posts.map((post) => (
                        <li
                            key={post.id}
                            className="flex justify-between items-center border p-3 rounded dark:border-gray-600 dark:bg-gray-800"
                        >
                            <div className="flex-1">
                                <strong className="text-sm text-gray-600">#{post.id}</strong>
                                <p className="mt-1">{post.title}</p>
                            </div>

                            <button
                                onClick={() => deleteMutation.mutate(post.id)}
                                className="text-red-500 hover:text-red-700 ml-2"
                                disabled={deleteMutation.isPending}
                            >
                                ❌
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default TanStackCRUD;