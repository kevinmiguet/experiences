import { expressMiddleware } from "cls-rtracer";
import express from "express";
import logger from "./logger";
const PORT = 8080;
const router = express();
router.use(expressMiddleware({}));
router.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

router.get("/api/toto", (req, res) => {
  const log = logger.child({ api: "/toto" });

  log.debug("tet");
  res.sendStatus(200);
});
