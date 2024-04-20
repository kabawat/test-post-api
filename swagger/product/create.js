/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
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
 */