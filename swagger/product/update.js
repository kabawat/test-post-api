// Route to update a product
/**
 * @swagger
 * /product/{productId}:
 *   put:
 *     tags: [Products]
 *     summary: Update a product by ID
 *     description: Update an existing product in the database by its ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to update
 *       - in: body
 *         name: product
 *         description: The product object to update
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             price:
 *               type: number
 *             desc:
 *               type: string
 *             category:
 *               type: string
 *     responses:
 *       '200':
 *         description: Product updated successfully
 *       '400':
 *         description: Bad request, error message returned
 *       '404':
 *         description: Product not found
 */
