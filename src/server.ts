import express, {Request, Response} from 'express';
import config from '../config/default';
import morgan from "morgan";
import cors from "cors";
import Logger from '../core/Logger';

process.on("uncaughtException", (e) => {
  Logger.error(e);
});

const app = express();

// CORS
const cors_url = config.corsurl
app.use(
  cors({ origin: cors_url, optionsSuccessStatus: 200, credentials: true })
);

// MORGAN - for request logging in server
app.use(
  morgan(function (tokens: any, req: any, res: any) {
    const msg = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
    Logger.http(msg);
    return null;
  })
);


app.use(express.json())
// ROUTES
app.get('/', (_, res) => res.send("<h1>Server Running Perfectly 🚀</h1>"));

export default app;