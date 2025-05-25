const swaggerJSDoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi:'3.0.0',
        info: {
          title:'Bookstore API',
          version: '1.0.0',
          description : 'Enterprise Bookstore API Documentation',
        },
        servers:[
            {
             url: 'http://localhost:5050',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;