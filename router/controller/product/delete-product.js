const Product = require('../../../model/product');

async function handleDeleteProduct(req, res) {
    try {
        const productId = req.params.productId;
        // Delete the product from the database by its ID
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = handleDeleteProduct;
