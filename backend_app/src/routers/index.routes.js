import { Router } from "express";

import userRoutes from "../modules/user/user.module.js";

const routes = Router();

routes.use("/users", userRoutes);

export default routes;