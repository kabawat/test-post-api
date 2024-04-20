/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product
 *     tags: [create Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               desc:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product added successfully
 *       400:
 *         description: Bad request. Missing required fields or invalid data.
 *
 * 
 * /product:
 *   get:
 *     summary: Retrieve all products
 *     tags: [get Products]
 *     responses:
 *       200:
 *         description: Successful operation. Returns an array of products.
 *         content:
 *           application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               desc:
 *                 type: string
 *               category:
 *                 type: string
 *       400:
 *         description: Error occurred. Returns an error message.
 */