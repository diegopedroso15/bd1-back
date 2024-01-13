import winston from "winston";
const DailyRotateFile = require("winston-daily-rotate-file");

const transport = new DailyRotateFile({
  filename: "logs/application.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: null,
  tailable: true,
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "BackendLogger" },
  transports: [new winston.transports.Console(), transport],
});

export default logger;
