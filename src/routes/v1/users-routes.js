const express =  require('express');

const userController = require('../../controller/v1/users');

const route = express.Router();

route.post('/create',userController.createUser);
route.post('/update',userController.updateUser);
route.post('/delete',userController.deleteUser);
route.post('/get-all',userController.getUser);