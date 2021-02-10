"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const cls_rtracer_1 = __importDefault(require("cls-rtracer"));
exports.default = (() => {
    const logger = winston_1.createLogger({
        level: "silly",
        format: (() => winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()))(),
        defaultMeta: {
            get requestId() {
                return cls_rtracer_1.default.id();
            },
        },
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({ filename: `./log.log` }),
        ],
    });
    return logger;
})();
//# sourceMappingURL=logger.js.map