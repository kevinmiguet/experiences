import { createLogger, format, transports } from "winston";
import rTracer from "cls-rtracer";

export default (() => {
  const logger = createLogger({
    level: "silly",
    format: (() => format.combine(format.timestamp(), format.json()))(),
    defaultMeta: {
      get requestId() {
        return rTracer.id();
      },
    },
    transports: [
      new transports.Console(),
      new transports.File({ filename: `./log.log` }),
    ],
  });
  return logger;
})();
