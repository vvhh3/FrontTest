# Курс по Next.js для `my-app`

Этот проект использует:

- `Next.js 16`
- `React 19`
- `App Router`
- `TypeScript`
- `Tailwind CSS 4`

## 1. Как работают страницы в этом проекте

В вашем проекте маршруты создаются из папок внутри `app/`.

Примеры:

- `app/page.tsx` -> `/`
- `app/about/page.tsx` -> `/about`
- `app/blog/page.tsx` -> `/blog`
- `app/blog/post/page.tsx` -> `/blog/post`

Важно:

- Папка сама по себе не становится страницей, пока внутри нет `page.tsx`.
- `layout.tsx` отвечает за общий интерфейс для группы страниц.
- Главный layout у вас уже находится в `app/layout.tsx`.

## 2. Как создать новую страницу

Нужно создать папку внутри `app`, а в ней файл `page.tsx`.

Пример: создаём страницу `/about`

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">О странице</h1>
      <p className="mt-4">Эта страница создана через App Router.</p>
    </main>
  );
}
```

После этого:

- откройте `http://localhost:3000/about`
- в режиме разработки Next.js сразу подхватит новую страницу

## 3. Команды для проекта

Запускайте из папки `my-app`:

```bash
npm run dev
```

Открыть в браузере:

```text
http://localhost:3000
```

Полезные команды:

```bash
npm run build
npm run start
npm run lint
```

## 4. Базовая структура проекта

```text
my-app/
  app/
    layout.tsx
    page.tsx
    globals.css
```

Что делают эти файлы:

- `app/layout.tsx` -> основной layout всего приложения
- `app/page.tsx` -> главная страница `/`
- `app/globals.css` -> глобальные стили

## 5. Пример: создаём две страницы

### `/about`

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <h1>О нас</h1>;
}
```

### `/contact`

```tsx
// app/contact/page.tsx
export default function ContactPage() {
  return <h1>Контакты</h1>;
}
```

## 6. Пример: вложенные страницы

Если нужна страница `/blog/post-1`, создайте вложенные папки:

```text
app/
  blog/
    post-1/
      page.tsx
```

Пример:

```tsx
// app/blog/post-1/page.tsx
export default function PostPage() {
  return <h1>Мой первый пост</h1>;
}
```

Адрес страницы:

```text
/blog/post-1
```

## 7. Пример: динамическая страница

Динамические маршруты удобны для постов, товаров, профилей и ID.

Создайте:

```text
app/
  blog/
    [slug]/
      page.tsx
```

Пример для App Router:

```tsx
// app/blog/[slug]/page.tsx
type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Пост: {slug}</h1>
    </main>
  );
}
```

Примеры адресов:

- `/blog/hello`
- `/blog/next-js`
- `/blog/my-first-post`

## 8. Пример: общий layout для раздела

Если вы хотите, чтобы все страницы `/dashboard/*` имели общую оболочку, создайте:

```text
app/
  dashboard/
    layout.tsx
    page.tsx
    settings/
      page.tsx
```

Пример layout:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold">Панель управления</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
```

Этот layout будет оборачивать:

- `/dashboard`
- `/dashboard/settings`

## 9. Переходы между страницами

Используйте `Link` из `next/link`.

```tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Главная</h1>

      <nav className="mt-6 flex gap-4">
        <Link href="/about">О нас</Link>
        <Link href="/contact">Контакты</Link>
        <Link href="/blog/hello">Пост</Link>
      </nav>
    </main>
  );
}
```

## 10. Server Components и Client Components

По умолчанию файлы в `app/` являются Server Components.

`"use client"` нужен только если вы используете:

- `useState`
- `useEffect`
- браузерные API
- обработчики кликов и другую интерактивность на клиенте

Пример:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Клики: {count}
    </button>
  );
}
```

## 11. Метаданные страницы

Можно задать заголовок и описание страницы.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас",
  description: "Страница о компании",
};

export default function AboutPage() {
  return <h1>О нас</h1>;
}
```

## 12. Небольшой план практики

Попробуйте сделать по шагам:

1. Создайте `app/about/page.tsx`
2. Создайте `app/contact/page.tsx`
3. Добавьте ссылки на главную страницу
4. Создайте `app/blog/[slug]/page.tsx`
5. Откройте `/blog/test-post`
6. Создайте `app/dashboard/layout.tsx`

## 13. Короткие ответы

### Как создать новую страницу в Next.js?

Создайте папку внутри `app` и добавьте в неё `page.tsx`.

Пример:

```text
app/services/page.tsx
```

Это создаст маршрут:

```text
/services
```

### Нужна ли папка `pages/`?

Нет. У вас проект уже работает на современном `app/` router.

### Где редактировать главную страницу?

Здесь:

```text
app/page.tsx
```

### Где настраивать общий layout?

Здесь:

```text
app/layout.tsx
```

## 14. Мини-шпаргалка

```text
app/page.tsx                  -> /
app/about/page.tsx           -> /about
app/blog/page.tsx            -> /blog
app/blog/[slug]/page.tsx     -> /blog/:slug
app/dashboard/layout.tsx     -> общий layout для /dashboard/*
```

## 15. Что делать дальше

Следующий хороший шаг: заменить стандартное содержимое в `app/page.tsx` на свою главную страницу и добавить ссылки на новые разделы.
