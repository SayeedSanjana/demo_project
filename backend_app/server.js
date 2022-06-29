import { mount_app } from "./src/app.js";
import { mongoConnect } from "./src/config/db.config.js";
import apis from "./src/routers/index.routes.js";

const app = mount_app(apis);

mongoConnect();

app.listen(process.env.APP_PORT, () => {
    console.log(`${new Date().toISOString()} [info] Server started on port ${process.env.APP_PORT}`);
})