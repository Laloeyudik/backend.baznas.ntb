import express, { Request, Response, NextFunction } from "express";
import { AdminController } from "../controllers/admin-controller";

const adminRoute = express();

adminRoute
  .route("/auth/login")
  .post(async function (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    AdminController.createLinkLogin(req, res, next);
  });

export default adminRoute;
