import { z } from "zod";

const createLinkLoginSchema = z.object({
  email: z.string().email(),
});


export {createLinkLoginSchema};