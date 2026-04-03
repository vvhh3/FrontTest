
# Почему setTimeout попадает в macrotask queue?
👉 Потому что он относится к Web APIs (браузера / Node.js)

Как это работает по шагам:
JS выполняет код → видит setTimeout
Передаёт его в Web API (таймеры)
После истечения времени → колбэк попадает в macrotask queue

📌 Важно:

setTimeout — это НЕ часть JS-движка
это API среды (браузер / Node.js)

Macrotask queue - (очередь макрозадач или просто Task Queue) — это структура данных, используемая Event Loop (циклом событий) для хранения асинхронных задач, которые должны быть выполнены после завершения текущего скрипта и очистки очереди микрозадач. Задачи выполняются по принципу FIFO (первым пришел — первым ушел).

# Чем отличается Promise.then от setTimeout в Event Loop?

Чем отличается Promise.then от setTimeout?
	                Promise.then	    setTimeout

Очередь	            microtask	        macrotask
-----------------------------------------------------
Приоритет	🔥      выше	            ниже
------------------------------------------------------
Когда выполняется	сразу после         на следующем тике
                    текущего стека	
--------------------------------------------------------
📌 Главное правило Event Loop:
Сначала выполняются ВСЕ microtasks → потом ОДНА macrotask

# Что выполнится раньше?

```
    setTimeout(() => console.log("timeout"), 0);
    Promise.resolve().then(() => console.log("promise"));
```


# XSS

```
<div dangerouslySetInnerHTML={{ __html: message.text }} />
```
❗ Почему это XSS?

Если пользователь введёт:
```
<script>alert('hacked')</script>
```
👉 браузер выполнит этот код

💥 Что происходит:

ты вставляешь строку как HTML

браузер парсит её

```<script>``` выполняется

👉 это и есть XSS (Cross-Site Scripting)

❓ Чем опасен ```dangerouslySetInnerHTML```?

позволяет вставлять любой HTML
включая:
```
<script>
<img onerror=...>
<iframe>
```
👉 злоумышленник может:

украсть cookies

отправить запросы от имени пользователя

внедрить фейковый UI

❓ Как защититься?

✅ Вариант 1 (лучший):

НЕ использовать:

```
<p>{message.text}</p>
```

👉 React автоматически экранирует HTML

✅ Вариант 2 (если нужен HTML):

использовать sanitizer:
```
import DOMPurify from "dompurify";

<div dangerouslySetInnerHTML={{
  __html: DOMPurify.sanitize(message.text)
}} />
```


# Event Loop:
- Promise → microtask (высокий приоритет)
- setTimeout → macrotask
- сначала microtasks → потом macrotasks

# Memory:
- React смотрит на ссылки
- мутации ломают ререндер
- нужно immutable
# XSS:
- вставка HTML = риск выполнения JS
- dangerouslySetInnerHTML опасен
- решение → sanitize или не использовать
# CSRF:
- браузер автоматически шлёт cookies
- атака возможна с другого сайта
- защита:
- CSRF token
- SameSite
- Origin check
# CSP:
- ограничивает выполнение скриптов
- защищает от XSS