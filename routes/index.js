const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller');
router.get('/',homeController.home);
router.post('/todo_list',homeController.appended_list);
router.get('/delete_checked_todo_list_item',homeController.deleted_item_todo_list);

// export router
module.exports =  router;