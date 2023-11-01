import express from 'express'
import categoryCtrl from '../controllers/category.controller.js' 
const router = express.Router()
router.route('/api/categories') 
.get(categoryCtrl.list)
.post(categoryCtrl.create)
router.route('/api/categories/:id') 
.get(categoryCtrl.read)
.put(categoryCtrl.update) 
.delete(categoryCtrl.remove)
router.param('id', categoryCtrl.categoryByID)
router.route('/api/categories').post(categoryCtrl.create) 
router.route('/api/categories').get(categoryCtrl.list)
router.param('id', categoryCtrl.categoryByID)
router.route('/api/categories/:id').get(categoryCtrl.read)
router.route('/api/categories/:id').put(categoryCtrl.update)
router.route('/api/categories/:id').delete(categoryCtrl.remove)




    
    
export default router
