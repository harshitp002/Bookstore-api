const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authController')

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
 *    post:
 *      summary: Register a new user
 *      tags: [Auth]
 *      requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   required:
 *                     - name
 *                     - email
 *                     - password
 *                   properties:
 *                     name:
 *                      type: string
 *                     email:
 *                      type: string
 *                      format: email
 *                     password:
 *                      type: string
 *      responses:
 *         201:
 *           description: User registered successfully
 *         400:
 *           description: Bad request or validation error
 */


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user and get token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful, returns token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */

router.post('/register', register);
router.post('/login', login);



module.exports = router;