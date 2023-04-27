import express from "express";
import buildDatabase from "./DataBaseConnection";
require("dotenv").config();

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import TestSuiteRoutes from "./routes/TestSuiteRoutes";
import { testCaseRouter }  from "./routes/testCaseRoutes";
import { validationTagRouter } from "./routes/validationTagRoutes";
import qs from 'qs'
export function createApp() {
  const app = express();

  app.set('query parser', (str: string) => {
    return qs.parse(str, {
      allowDots: true
    })
  })
  buildDatabase();

  app.use(express.json({
    
  }));

  app.use(TestSuiteRoutes);
  app.use(testCaseRouter);
  app.use(validationTagRouter);
  
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "TRVT API",
        version: "1.0.0",
      },
    },
    apis: ["./src/components/**/*.openapi.yaml"],
  };

  const openapiSpecification = swaggerJsdoc(options);

  app.use("/api", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

  
  return app;
}
