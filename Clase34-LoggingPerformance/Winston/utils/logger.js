import winston from "winston";

const levelOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    fatal: "red",
    erro: "orange",
    warning: "yellow",
    info: "blue",
    debug: "white",
  },
};

const logger = winston.createLogger({
  levels: levelOptions.levels,
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize({ colors: levelOptions.colors }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "./alertas.log",
      level: "warning",
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `${info.timestamp} - ${info.level}: ${info.message}`;
    })
  ),
});

export const addLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.info(`${req.method} en ${req.url}`);
  req.logger.warning(`${req.method} en ${req.url}`);
  next();
};
