# Task/Project Microservice

Microservicio básico desarrollado con Node.js, Express y TypeScript que expone un endpoint `/hello` con documentación Swagger.

## Requisitos

- Node.js (versión 16 o superior)
- npm o yarn

## Instalación

1. Instalar las dependencias:
```bash
npm install
```

2. Instalar dependencia faltante (si es necesario):
```bash
npm install @types/swagger-ui-express
```

## Scripts disponibles

- `npm run dev` - Ejecuta el servidor en modo desarrollo con auto-reload
- `npm run build` - Compila el código TypeScript a JavaScript
- `npm start` - Ejecuta el servidor en modo producción
- `npm test` - Ejecuta los tests (por implementar)

## Uso

### Modo desarrollo
```bash
npm run dev
```

### Modo producción
```bash
npm run build
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## Endpoints disponibles

- `GET /hello` - Retorna un mensaje de saludo
- `GET /health` - Health check del servicio
- `GET /api-docs` - Documentación Swagger de la API

## Estructura del proyecto

```
src/
├── app.ts                 # Archivo principal de la aplicación
├── config/
│   └── swagger.ts         # Configuración de Swagger
└── routes/
    └── hello.routes.ts    # Rutas del endpoint hello
```

## Documentación API

Una vez que el servidor esté corriendo, puedes acceder a la documentación Swagger en:
`http://localhost:3000/api-docs`

## Respuesta del endpoint /hello

```json
{
  "message": "Hello from project-task"
}
```

## Preparado para MongoDB

El proyecto está preparado para integrar MongoDB cuando sea necesario. Las dependencias y configuraciones adicionales se pueden agregar según los requisitos específicos.
