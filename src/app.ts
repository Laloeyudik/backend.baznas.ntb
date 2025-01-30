import { env } from "../env";
import server from "./server";
import { handelCreateError } from "./shared/utils/error-handler/error-handler";
import errorHandler from "error-handler-json";

server.use(
  errorHandler({
    onInternalServerError: (err): void => {
      throw handelCreateError(
        500,
        "Ops..server ganguan, mohon maaf segera kami tangani"
      );
    },
    includeStack:
      env.APP_ENV === "local" ? true : env.APP_ENV === "staging" ? true : false,
  })
);

server.listen(env.PORT, function () {
  console.log("Ok!");
});
