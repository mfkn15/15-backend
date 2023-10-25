import helmet from "helmet";
import { Express } from "express";

export default (app: Express) => {
    app.use(helmet());
    app.use(helmet.frameguard({ action: 'deny' }))
}