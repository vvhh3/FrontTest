# TypeScript React 
- Опыт работы с React + Redux/Zustand/MobX.
- SCSS, Tailwind
- Git
- Next.js, Jest, Docker
- Понимание принципов разработки: SOLID, KISS
- WebSocket
- Понимание принципов работы JWT и безопасного хранения токенов
- Опыт работы с асинхронными HTTP-запросами и обработкой ошибок
- ООП и SOLID
- Redis
- Понимание state-management (useState, useEffect — уже достаточно)
- CSS Modules знаете современные стандарты (Flex, Grid), методологии (CSS Modules) и умеете создавать адаптивную верстку
- Vite/Webpack
- Storybook
- Тесты (жирный плюс, но не везде надо. по этому не в первую очередь) Unit, Integration или E2E тестов
- Event Loop, асинхронность, модель памяти
- Знаете ключевые Browser API: Storage, Cookies, Network (Fetch/WebSocket), а также API для производительности и анимаций (RAF, IntersectionObserver и так далее)
- Знаете основы безопасности фронтенда: понимаете природу XSS и CSRF, умеете безопасно обрабатывать пользовательские данные и соблюдать CSP
- CI/CD (понимание что это и зачем нужно. тыкать не обязательно)
- Vue.js (ознакомиться, потыкать)
- Postrge SQL (базово потыкать. просто чтобы понимать)

Если коротко по приоритету для тебя:

TanStack Query

Vitest

Playwright

Storybook

Zod

Astro по интересу


# JWT 
- npm install express jsonwebtoken bcryptjs cors

# StoryBook

В корне проекта:

- npx sb@latest init
- npm run storybook

# Redis:

Redis (Remote Dictionary Server) — это высокопроизводительная система управления базами данных класса NoSQL с открытым исходным кодом, работающая в оперативной памяти (in-memory). Она используется как база данных, кэш, брокер сообщений и поисковой движок. 

Основные характеристики:

- Работа в памяти: Данные хранятся в RAM, что обеспечивает сверхнизкую задержку (субмиллисекундную) и высочайшую скорость чтения и записи.

- Структуры данных:

    В отличие от простых систем «ключ-значение», Redis поддерживает сложные структуры: строки, хэши, списки, множества, отсортированные множества, JSON, потоки (Streams) и геопространственные индексы.

    Устойчивость (Persistence): Несмотря на работу в памяти, Redis может сохранять данные на диск с помощью снимков (RDB) или логов операций (AOF).

    Масштабируемость и высокая доступность:

    Redis Sentinel: Обеспечивает мониторинг и автоматическое переключение на резервный узел при сбое.

    Redis Cluster: Позволяет автоматически распределять данные между несколькими узлами для горизонтального масштабирования.

- Типовые сценарии использования

    Кэширование: Ускорение приложений за счет хранения часто запрашиваемых данных.
    
    Управление сессиями: Хранение данных о сессиях пользователей в веб-приложениях.

    Очереди сообщений: Использование списков или потоков для передачи задач между сервисами.

    Таблицы лидеров: Использование отсортированных множеств для ранжирования в реальном времени.

    Векторная база данных: Хранение и поиск эмбеддингов для приложений на базе ИИ



# useContext

Мини-Гайд Как Писать useContext С Нуля

1. Создай контекст
const ThemeContext = createContext(null);
2. Создай провайдер

```
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```
3. Создай свой хук
```
function useTheme() {
  return useContext(ThemeContext);
}
```
4. Оберни приложение
```
<ThemeProvider>
  <App />
</ThemeProvider>
```
5. Используй в любом дочернем компоненте
```
const { theme, toggleTheme } = useTheme();
```

# Event Loop и тд:

JavaScript — ключевые механики (конспект)
🔁 Event Loop (как работает асинхронность)

JS однопоточный → выполняет код по очереди, но умеет обрабатывать асинхронные задачи через event loop.

Очереди:

1. Call Stack (синхронный код)
2. Microtasks (Promise, async/await)
3. Macrotasks (setTimeout, события)

Пример:
```
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```
Результат:

1
4
3
2

Правило:
```
Синхронный код → Microtasks → Macrotasks

Важно понимать для:

async/await
fetch / axios
React (рендеры, setState)
debounce/throttle
```
🔒 Замыкания (Closures)

Функция запоминает переменные из своей области.
```
function counter() {
  let count = 0;

  return () => {
    count++;
    console.log(count);
  };
}

const c = counter();

c(); // 1
c(); // 2

Используется в:

React hooks
обработчиках
debounce/throttle
приватных переменных
```
⚠️ Важно:

setCount(count + 1); // может быть баг

Лучше:

setCount(prev => prev + 1);
🧬 Прототипы

Все объекты в JS связаны через prototype chain.
```
const obj = {};
obj.toString(); // берётся из Object.prototype

Пример:

const animal = {
  speak() {
    console.log("sound");
  },
};

const dog = Object.create(animal);

dog.speak(); // работает
```
Классы — это просто синтаксис:
```
class User {
  sayHi() {}
}

Методы лежат в:

User.prototype

Важно для:

понимания массивов (map, filter)
классов
библиотек
```
🎯 Контекст this

this зависит от того, как вызвали функцию
```
const user = {
  name: "Matvei",
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi(); // Matvei

Но:

const fn = user.sayHi;
fn(); // undefined
```
Стрелочные функции:
```
const obj = {
  name: "Matvei",
  sayHi: () => console.log(this.name),
};

👉 this не тот

Правило:

обычные функции → свой this
стрелочные → берут this снаружи
```
В React:
```
чаще стрелки
но методы объектов → обычные функции
```
🔍 Regex (регулярные выражения)

Шаблоны для работы со строками.

Проверка:
```
/\d/.test("123"); // true
```
Поиск:
```
"price 100".match(/\d+/g); // ["100"]
```
Замена:
```
"hello   world".replace(/\s+/g, " ");
```
Пример email:
```
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```
Основные символы:
```
\d — цифра
\w — буква/цифра
\s — пробел
+  — 1 или больше
*  — 0 или больше
?  — необязательный
[] — набор
|  — или
^  — начало
$  — конец
g  — все совпадения
i  — без регистра
```
Используется в:

формах
валидации
фильтрах
поиске
🧩 Связь с фронтом
Механика	Где используешь
Event Loop	async/await, API, UI
Замыкания	React hooks
Прототипы	объекты, массивы
this	методы, callbacks
Regex	формы, фильтры