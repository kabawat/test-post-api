const Product = require('../../../model/product');
async function handleGetSingleProduct(req, res) {
    try {
        const productId = req.params.productId;
        // Retrieve the product from the database by its ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = handleGetSingleProduct