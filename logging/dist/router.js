"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cls_rtracer_1 = require("cls-rtracer");
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const PORT = 8080;
const router = express_1.default();
router.use(cls_rtracer_1.expressMiddleware({}));
router.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
router.get("/api/toto", (req, res) => {
    const log = logger_1.default.child({ api: "/toto" });
    log.debug("tet");
    res.sendStatus(200);
});
//# sourceMappingURL=router.js.map