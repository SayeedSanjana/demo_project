import {config} from "dotenv"
import express from 'express';
import cors from 'cors';
import { error_handler } from "./config/error.handler.js";

// Load environment variables from .env file
config();

export const mount_app = (api) => {
    const app = express();

    // middlewares
    app.use([
        express.json(),
        express.urlencoded({extended: true}),
        cors()
    ])

    // mount routers
    app.use("/api", api);

    // error handler
    app.use(error_handler);

    return app;
}