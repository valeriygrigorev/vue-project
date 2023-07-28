# vue-project

## О проекте
Код представляет собой тестовый проект на Vue, созданный на основе API из репозитория https://github.com/smenateam/assignments/blob/master/site-frontend/README.md.
API реализовано как MVP, что повлекло необходимость учитывать в коде некоторые его особенности для достижения консистентности поведения приложения.
Кроме того, реализованы некоторые функции не указанные в задании.

## Особенности развертывания сервиса API
В настоящее время требуется внесение изменений в файл app.js: 
строку 4
	`const exjwt = require("express-jwt");`
заменить на 
	`const { expressjwt: ejwt } = require("express-jwt");`
и строку 71
 	`const { id } = req.user;`
на 
	`const { id } = req.auth;`

## Особенности развертывания приложения
Сервер API по умолчанию запускается на http://localhost:8080, который должен быть указан в файле .env. В репозитории имеется .env_example, достаточно удалить постфикс _example.


Далее описаны стандартные для проектов на vue команды.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
