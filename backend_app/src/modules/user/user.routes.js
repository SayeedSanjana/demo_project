import {Router} from "express";

const routes = Router();

export default (module) => {
    routes.post("/register", module.userRegister);
    routes.post("/login", module.userLogin);

    return routes;
}