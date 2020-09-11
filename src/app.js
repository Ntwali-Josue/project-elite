import express from 'express';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import { require } from 'yargs';
// import swaggerJsDoc from 'swagger-jsdoc';
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

// dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const swaggerOptions ={
  swaggerDefinition: {
    info: {
      title : "Pharamacy-locator api",
      description : "Pharmacy-locator api documentation",
      contact : {
        name : "Pharmacy Locator"
      },
      servers : ["http://localhost:5000"]
    }
  },
  apis:["app.js"]
};

// app.use(express.json()); 

// app.use(bodyParser.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description:use to request all customerss
 *    responses:
 *       '200':
 *         description: A successful response
 */
app.get("/customers", (req, res) => {
  console.log("request");
  res.status(200).send("customer results");
});

/**
* @swagger
* /customer:
*  put:
*    description:use to request all customerss
*    responses:
*       '201':
*         description: A successful response
*/
app.put("/customer", (req, res) => {
 res.status(200).send("customer results");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;