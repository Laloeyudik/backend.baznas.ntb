import { z, ZodError } from "zod";
import { handelCreateError } from "../../utils/error-handler/error-handler";

export class ValidationInput {
  static async validateAsync<T>(schema: z.ZodType<T>, data: any): Promise<T> {
    try {
      const result = await schema.parseAsync(data);
      return result;
    } catch (err) {
      if (err instanceof ZodError) {
        throw handelCreateError(400, "Validation Error");
      }
      throw handelCreateError(
        500,

        "Opps.. Terjadi kesalahan pada server"
      );
    }
  }
}
