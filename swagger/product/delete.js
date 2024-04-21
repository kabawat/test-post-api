/**
 * @swagger
 * /product/{productId}:
 *   delete:
 *     tags: [Products]
 *     summary: Delete a single product by ID
 *     description: Delete a single product from the database by its ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *           required: true
 *         description: ID of the product to delete
 *
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *       '400':
 *         description: Product not found
 */
