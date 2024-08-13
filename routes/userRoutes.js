/**
 * @api {post} /users Create a new user
 * @apiName CreateUser
 * @apiGroup Users
 * 
 * @apiParam {String} username User's username
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 * 
 * @apiSuccess {Object} user Created user object
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *    "id": "1",
 *    "username": "john_doe",
 *    "email": "john@example.com"
 *  }
 */

/**
 * @api {delete} /users Delete a user
 * @apiName DeleteUser
 * @apiGroup Users
 * 
 * @apiParam {String} id User's unique ID
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 * {"Delete the user successfully"}
 */


/**
 * @api {get} /users Get user profile
 * @apiName GetUserProfile
 * @apiGroup Users
 * 
 * @apiParam {String} id User's unique ID
 * 
 * @apiSuccess {Object} user User profile object
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "username": "john_doe",
 *    "email": "john@example.com"
 *  }
 */

/**
 * @api {put} /users/updateProfile Update user profile
 * @apiName UpdateUserProfile
 * @apiGroup Users
 * 
 * @apiParam {String} id User's unique ID
 * @apiParam {String} username Updated username
 * @apiParam {String} email Updated email address
 * 
 * @apiSuccess {Object} user Updated user object
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "username": "updated_john_doe",
 *    "email": "updated_john@example.com"
 *  }
 * 
 */

/**
 * @api {put} /users/updatePassword Update user password
 * @apiName UpdateUserPassword
 * @apiGroup Users
 * 
 * @apiParam {String} id User's unique ID
 * @apiParam {String} currentPassword Current password
 * @apiParam {String} newPassword New password
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "Password updated successfully"
 *  }
 * 
 */

/**
 * @api {post} /login User login
 * @apiName UserLogin
 * @apiGroup Authentication
 * 
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 * 
 * @apiSuccess {String} token Authentication token
 * @apiSuccess {Object} user User object
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *  }
 * 
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// add JWT authentication here
const authenticateToken = require('../middlewares/authenticateToken');

// use JWT auth
router.post('/signup', userController.createUser);
router.delete('/users', authenticateToken, userController.deleteUser);
router.get('/users/', authenticateToken, userController.getProfile);
router.put('/users/updateProfile', authenticateToken, userController.updateProfile);
router.put('/users/updatePassword', authenticateToken, userController.updatePassword);
router.post('/login', userController.verifyUser);

module.exports = router;
