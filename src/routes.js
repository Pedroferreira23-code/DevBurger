import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import authMiddleware from "./middlewares/auth";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import CategoryController from "./app/controllers/CategoryController";



const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);
//*tudo que vier depois do use(authMiddleware) vai precisar de autenticação//*

routes.post('/products', upload.single('file') , ProductController.store);
routes.get("/products" , ProductController.index);

routes.post('/categories' , CategoryController.store);
routes.get('/categories' , CategoryController.index);
	

export default routes;
