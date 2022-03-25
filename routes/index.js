const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller');
router.get('/',homeController.home);
router.post('/todo_list',homeController.appended_list);
router.post('/delete_checked_todo_list_item',homeController.deleted_item_todo_list);
router.post('/check_box_value',homeController.check_box);
console.log('router has routed now ');

module.exports =  router;