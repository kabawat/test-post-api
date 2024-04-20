const Product = require('../../../model/product');
async function handleUpdateProduct(req, res) {
    try {
        const productId = req.params.productId;
        const { title, price, desc, category } = req.body;

        // Check if the product exists
        const existingProduct = await Product.findById(productId);
        if (!existingProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update the product fields based on data from the front end
        if (title) {
            existingProduct.title = title;
        }
        if (price) {
            existingProduct.price = price;
        }
        if (desc) {
            existingProduct.desc = desc;
        }
        if (category) {
            existingProduct.category = category;
        }

        // Save the updated product to the database
        await existingProduct.save();

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = handleUpdateProduct