# master-test-api

Este proyecto está orientado a una prueba tecnica del equipo de Master, en la cual se define en comunicarse con un api de GitHub y traer los 10 primeros repos más populares del usuario google.

## Requerimiento basicos
- Node.js v20.14.0
- NPM 10.7.07

## Instalar dependencias
```
  npm install
```

## Variables de ambiente
```
  # Local .env
  PORT=3000
  GIT_HUB_URL=https://api.github.com
  GIT_HUB_PATH_USERS=/users
  PRINCIPAL_GITHUB_USERNAME=google
  VALUES_PER_PAGE=10
```

## Ejecución
```
  npm run start
```

Y si se requiere ejecutar mientras que se hacen cambios al momento seria con:

```
  npm run start:watch
```
