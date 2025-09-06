import swaggerUi from 'swagger-ui-express';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task/Project Microservice API',
      version: '1.0.0',
      description: 'API para el microservicio de tareas y proyectos',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Rutas donde están los comentarios de Swagger
};

export const swaggerDocs = {
  openapi: '3.0.0',
  info: {
    title: 'Task/Project Microservice API',
    version: '1.0.0',
    description: 'API para el microservicio de tareas y proyectos',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desarrollo',
    },
  ],
  paths: {
    '/hello': {
      get: {
        summary: 'Endpoint de saludo',
        description: 'Retorna un mensaje de saludo del microservicio',
        responses: {
          '200': {
            description: 'Mensaje de saludo exitoso',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Hello from project-task'
                    }
                  }
                }
              }
            }
          }
        },
        tags: ['Hello']
      }
    }
  }
};

export { swaggerUi };
