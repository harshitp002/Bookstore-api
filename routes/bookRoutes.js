const express = require('express');
const router  = express.Router();
const bookController = require('../controllers/bookController');
const auth = require('../middlewares/authMiddleware');
const admin =  require('../middlewares/adminMiddleware');


/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management APIs
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of books
 */

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Book ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book object
 *       404:
 *         description: Book not found
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *               stock:
 *                 type: number
 *               publishedDate:
 *                 type: string
 *                 format: date
 *               coverImage:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Book ID
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Book updated
 *       404:
 *         description: Book not found
 */

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Book ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted
 *       404:
 *         description: Book not found
 */


//public routes
router.get('/', bookController.getAllBooks);
router.get('/:id',bookController.getOneBook);

//admin routes
router.post('/',auth, admin, bookController.createBook);
router.put('/:id',auth, admin, bookController.updateBook);
router.delete('/:id',auth, admin, bookController.deleteBook);

module.exports = router;

