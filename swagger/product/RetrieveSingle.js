/**
 * @swagger
 * /product/{productId}:
 *   get:
 *     tags: [Products]
 *     summary: Get a single product by ID
 *     description: Retrieve a single product from the database by its ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *           required: true
 *         description: ID of the product to retrieve
 *
 *     responses:
 *       '200':
 *         description: A single product
 *       '400':
 *         description: Product not found
 */