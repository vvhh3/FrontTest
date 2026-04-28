
- docker build -t fronttest .

проверить локально:
- docker run -p 5173:5173 fronttest

зайти в docker hub
- docker login

Поставить тег для docker hub
- docker tag fronttest vvhh3/fronttest:latest

Запушить в docker hub
- docker push vvhh3/fronttest:latest

Запустить с docker hub
- docker run -p 5173:5173 vvhh/fronttest:latest