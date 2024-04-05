import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi, { JsonObject } from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'DexEx API',
            version: '1.0.0',
            description: 'A DevEx API with Swagger documentation',
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ],
        components: {
            schemas: {
                Note: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        description: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
        },
    },
    apis: ['src/router/NoteRouter.ts'],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export { swaggerUi, JsonObject, swaggerSpec };