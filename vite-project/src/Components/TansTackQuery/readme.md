npm i @tanstack/react-query


# Отличная тема 👀 — TanStack Query (бывший React Query) — это один из самых важных инструментов для фронтенда сейчас.

👉 TanStack Query — это библиотека для:

работы с серверным состоянием (server state)
❗ Важно
🔥 Есть 2 типа состояния:
```
Тип	        Где хранится
UI state	useState / Redux
Server state	API (backend)
```
👉 TanStack Query работает именно с данными с сервера (API)

🚀 Зачем он нужен

Без него ты делаешь так:
```
useEffect(() => {
  fetch("/api/data")
    .then(res => res.json())
    .then(setData);
}, []);
```
❌ Проблемы:
```
нет кеша
нет retry
нет loading/error норм
нет синхронизации
много шаблонного кода
```

✅ С TanStack Query:

```
const { data, isLoading, error } = useQuery({
  queryKey: ["data"],
  queryFn: fetchData
});
👉 и ВСЁ
```

🔥 Основные возможности
1. 📦 Кеширование
запрос сделал один раз → потом берётся из кеша
2. 🔄 Авто-обновление
при фокусе вкладки
при рефетче
по интервалу
3. ⚡ Background fetching

👉 обновляет данные в фоне без лагов UI

4. ❌ Retry
retry: 3

👉 сам повторяет запрос

5. 🧠 Умное управление состоянием
isLoading

isError

isFetching
```
🧩 Основные хуки
🔹 1. useQuery (GET запросы)
const { data, isLoading } = useQuery({
  queryKey: ["weather"],
  queryFn: () => fetch("/api/weather").then(r => r.json())
});
🔹 2. useMutation (POST / PUT / DELETE)
const mutation = useMutation({
  mutationFn: (newData) =>
    fetch("/api", {
      method: "POST",
      body: JSON.stringify(newData)
    }),
});
```

```
useQuery Для чтения данных с сервера (GET-запросы)
useMutation Для изменения данных (POST/PUT/DELETE)
useQueryClient Для ручного управления кэшем (обновление, инвалидация)
```

🔹 3. useQueryClient

👉 доступ к кешу
```
const queryClient = useQueryClient();
```
🔥 Ключевая концепция — queryKey
```
queryKey: ["weather", city]
```
👉 это: уникальный ключ запроса

🔄 Инвалидация кеша
```
queryClient.invalidateQueries(["weather"]);
```

👉 заставляет обновить данные
```
🚀 Пример (реальный)
const { data, isLoading } = useQuery({
  queryKey: ["weather", city],
  queryFn: () =>
    fetch(`https://api.weather.com/${city}`).then(r => r.json()),
});
```
⚡ Mutation + обновление
```
const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: addMessage,
  onSuccess: () => {
    queryClient.invalidateQueries(["messages"]);
  }
});
```
🧠 Важные настройки
🔹 staleTime
```
staleTime: 1000 * 60
```
👉 сколько данные считаются "свежими"

🔹 cacheTime
```
cacheTime: 1000 * 60 * 5
```

👉 сколько хранить в кеше

🔹 refetchOnWindowFocus
```
refetchOnWindowFocus: true
```
👉 обновляет при возвращении на вкладку


🧠 Как объяснить на собесе

TanStack Query — это библиотека для управления серверным состоянием. Она предоставляет кеширование, авто-рефетч, retry и синхронизацию данных с сервером через хуки useQuery и useMutation.


