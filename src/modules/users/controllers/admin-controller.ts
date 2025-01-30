import { Request, Response, NextFunction } from "express";
import { ValidationInput } from "../../../shared/middlewares/validation-inputs/validation-input";
import { createLinkLoginSchema } from "../helpers/admin-schema";
import { handelCreateError } from "../../../shared/utils/error-handler/error-handler";
import { handleCreateSuccess } from "../../../shared/utils/success-handler/success-handeler";

export class AdminController {
  static async createLinkLogin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {

      const isValid = await ValidationInput.validateAsync(
        createLinkLoginSchema,
        req.body
      );



      res.json(handleCreateSuccess("success", 200, `Link sudah terkirim ke email ${isValid.email}`, {...isValid} ));
    
    } catch (err) {
      next(err);
    }
  }
}
