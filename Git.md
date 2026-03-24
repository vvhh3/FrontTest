# 1. Базовая настройка Git

Перед началом работы нужно один раз настроить Git — указать, кто ты как автор коммитов:`

```
git config --global user.name "Твоё Имя"
git config --global user.email "your@email.com"
```

Проверить текущие настройки:

```
git config --list

Задать редактор (например, VS Code):

git config --global core.editor "code --wait"

```

# 📁 2. Создание и получение проекта

Если ты создаёшь новый проект:

```

git init

Если работаешь с уже существующим (что чаще в компании):

git clone <url>

Пример:

git clone https://github.com/user/project.git
```

# 📌 3. Работа с файлами

Добавление файлов в отслеживание:

```
git add file.txt
git add .

Проверка состояния проекта:

git status

👉 Показывает:

изменённые файлы
добавленные
неотслеживаемые

```
# 💾 4. Коммиты

Создание коммита:
```
git commit -m "описание изменений"

Быстрый коммит (для уже отслеживаемых файлов):

git commit -am "сообщение"

Исправление последнего коммита:

git commit --amend
```
# 🌿 5. Ветки (основа командной работы)

Создание ветки:

```
git branch feature/login

Переключение:

git switch feature/login

Создать и сразу перейти:

git switch -c feature/login

Просмотр веток:

git branch
git branch -a

Удаление ветки:

git branch -d feature/login
```
# 🔄 6. Слияние веток (merge)

Объединение веток:

```
git merge branch_name

Если возник конфликт:

git status

После исправления:

git add .
git commit
```

# 🌍 7. Работа с удалённым репозиторием

Добавить удалённый репозиторий:

```
git remote add origin <url>

Посмотреть подключённые репозитории:

git remote -v

Отправить изменения:

git push origin main

Первый push (с привязкой ветки):

git push -u origin main

Получить изменения:

git pull

Только скачать изменения:

git fetch
```

# 🧬 8. Rebase (важно в командах)

Обновить ветку поверх main:

```
git rebase main

Интерактивный режим (редактирование истории):

git rebase -i HEAD~3

👉 Позволяет:

объединять коммиты
менять порядок
редактировать сообщения
```

# 🔍 9. История изменений

Просмотр полной истории:
```
git log

Компактный и наглядный вид:

git log --oneline --graph --all
```

# 🧹 10. Отмена изменений

Отменить изменения в файле:

```
git restore file.txt

Убрать файл из staging:

git reset file.txt

Полный сброс (осторожно ❗):

git reset --hard
```

# 🧪 11. Временное сохранение (stash)

Сохранить изменения:

```
git stash

Вернуть обратно:

git stash pop

Список stash:

git stash list
```
# 🏷 12. Теги (релизы)

Создать тег:

```
git tag v1.0

Отправить тег:

git push origin v1.0
```

# 🧩 13. Полезные команды

Разница между изменениями:

```
git diff
git diff --staged

Кто изменял файл:

git blame file.txt

Удаление файла:

git rm file.txt

Переименование:

git mv old.txt new.txt
```