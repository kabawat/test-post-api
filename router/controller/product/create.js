const Product = require('../../../model/product');
async function handalCreateProduct(req, res) {
    try {
        // Extract product information from the request body
        const { title, price, desc, category } = req.body;

        // Validate inputs
        const missingFields = [];
        if (!title) {
            missingFields.push('title');
        }
        if (!price) {
            missingFields.push('price');
        }
        if (!desc) {
            missingFields.push('desc');
        }
        if (!category) {
            missingFields.push('category');
        }

        if (missingFields.length > 0) {
            throw new Error(`The following fields are required: ${missingFields.join(', ')}`);
        }

        // Create a new product object
        const newProduct = new Product({
            title,
            price,
            desc,
            category
        });

        // Save the product to the database
        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = handalCreateProduct