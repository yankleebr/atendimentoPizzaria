import {Router} from "express";
import multer from "multer";
import uploadConfig from './config/multer'

import { CreatUserController } from "./controllers/user/CreateUserController";
import { AuthUserController }  from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateCategoyController } from './controllers/category/CreateCategoyController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import {CreateProductController} from './controllers/product/CreateProductController';

import {ListByCategoryController} from './controllers/product/ListByCategoryController';

import {CreateOrderController} from './controllers/order/CreateOrderController';

import {RemoveOrderController} from './controllers/order/RemoveOrderController';


import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";

import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { finishOrderController } from "./controllers/order/FinishOrderController";



const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// Rotas User
router.post('/users', new CreatUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// Rotas Category
router.post('/category', isAuthenticated, new CreateCategoyController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// Rotas Product
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

//Lista produtos por categoria
router.get('/cetegory/product', isAuthenticated, new ListByCategoryController().handle)

//Abrindo/Criando pedido
router.post('/order', isAuthenticated, new CreateOrderController().handle)

//Deletando um pedido
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

//Adicionando item no Pedido
router.post('/order/add', isAuthenticated, new AddItemController().handle)

//Deletando item do pedido
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

//Enviando um pedido
router.put('/order/send',isAuthenticated, new SendOrderController().handle)

//Listando Pedidos
router.get('/orders', isAuthenticated, new ListOrderController().handle)

//Listando detalhes do Pedido
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

//Finalizando um pedido
router.put('/order/finish',isAuthenticated, new finishOrderController().handle)

export { router};