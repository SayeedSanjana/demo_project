import { UserModel } from "./user.model.js";
import repository from './user.repository.js';
import service from './user.services.js';
import controller from './user.controller.js';
import userRoutes from './user.routes.js';

const userRepository = repository(UserModel);
export const userService = service(userRepository);
const userController = controller(userService);

export default userRoutes(userController);