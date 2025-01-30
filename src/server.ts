import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

import express, { Request, Response } from "express";

import adminRoute from "./modules/users/routes/admin-route";

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(helmet());

server.use("/v1/", adminRoute);

export default server;
