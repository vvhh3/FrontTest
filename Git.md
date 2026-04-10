# 🧠 Полный гайд по Git (шпаргалка)

---

# ⚙️ 1. Базовая настройка Git

Настраивается один раз:

```bash
git config --global user.name "Твоё Имя"
git config --global user.email "your@email.com"
```

Проверка настроек:

```bash
git config --list
```

Редактор (например VS Code):

```bash
git config --global core.editor "code --wait"
```

---

# 📁 2. Создание и получение проекта

## Новый проект

```bash
git init
```

## Клонирование репозитория

```bash
git clone <url>
```

Пример:

```bash
git clone https://github.com/user/project.git
```

---

# 📌 3. Работа с файлами

Добавление файлов:

```bash
git add file.txt
git add .
```

Проверка состояния:

```bash
git status
```

---

# 💾 4. Коммиты

Создание коммита:

```bash
git commit -m "описание изменений"
```

Быстрый коммит:

```bash
git commit -am "сообщение"
```

Изменить последний коммит:

```bash
git commit --amend
```

---

# 🌿 5. Ветки (ОСНОВА)

## Получить список веток с GitHub

```bash
git fetch origin
```

## Посмотреть ветки

```bash
git branch
git branch -a
```

## Переключиться на ветку (если есть удалённая)

```bash
git switch dev
```

## Создать новую ветку

```bash
git switch -c feature/login
```

## Удалить ветку

```bash
git branch -d feature/login
```

---
# 🔄 6. Слияние веток (merge)

Перейти в целевую ветку:

```bash
git switch main
```

Обновить её:

```bash
git pull origin main
```

Слить ветку:

```bash
git merge dev
```

Отправить:

```bash
git push origin main
```

---

# ⚠️ Конфликты

Проверка:

```bash
git status
```

После исправления:

```bash
git add .
git commit
```

---

# 🌍 7. Работа с удалённым репозиторием

Добавить remote:

```bash
git remote add origin <url>
```

Посмотреть:

```bash
git remote -v
```

Отправить изменения:

```bash
git push origin main
```

Первый push:

```bash
git push -u origin main
```

Получить изменения:

```bash
git pull
```

Скачать без слияния:

```bash
git fetch
```

---

# 🧬 8. Rebase

Обновить ветку:

```bash
git rebase main
```

Интерактивный режим:

```bash
git rebase -i HEAD~3
```

---

# 🔍 9. История

```bash
git log
git log --oneline --graph --all
```

---

# 🧹 10. Отмена изменений

Отменить изменения:

```bash
git restore file.txt
```

Убрать из staging:

```bash
git reset file.txt
```

Полный сброс (ОПАСНО):

```bash
git reset --hard
```

---

# 🧪 11. Stash

Сохранить:

```bash
git stash
```

Вернуть:

```bash
git stash pop
```

Список:

```bash
git stash list
```

---

# 🏷 12. Теги

Создать:

```bash
git tag v1.0
```

Отправить:

```bash
git push origin v1.0
```

---

# 🧩 13. Полезные команды

Разница:

```bash
git diff
git diff --staged
```

Кто изменял файл:

```bash
git blame file.txt
```

Удалить файл:

```bash
git rm file.txt
```

Переименовать:

```bash
git mv old.txt new.txt
```

---

# 🚀 14. БАЗОВЫЙ WORKFLOW (как работать правильно)

```bash
# обновить main
git switch main
git pull origin main

# создать ветку
git switch -c feature/my-task

# работа
git add .
git commit -m "сделал задачу"

# отправка
git push -u origin feature/my-task

# обновить ветку
git switch main
git pull origin main
git switch feature/my-task
git merge main
```

---

# 🧠 Главное запомнить

* `fetch` — скачать изменения
* `pull` — скачать + влить
* `push` — отправить
* всегда работай в ветках, не в main
* перед началом — обновляй main

---
