"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerUi = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.swaggerSpec = swaggerSpec;
