import products from '../model/product.js';

// create product.
export const createProduct = async (req, res) => {
    try{
        const product = await products.create(req.body)
        res.status(201).json(product);
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const getProducts = async(req, res) => {
    try{
        const allProducts = await products.find();
        res.status(201).json(allProducts);
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const getProduct = async(req, res) => {
    try{
        const product = await products.findById(req.params.id);

        if(!product){
            return res.status(404).json({
                message: "Product Not Found..."
            });
        }

        res.json(product)
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const updateProduct = async(req, res) => {
    try{
        const product = await products.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if(!product){
            return res.status(404).json({
                message: "Product Not Found..."
            });
        }
        res.json(product);
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const deleteProduct = async(req, res) => {
    try{
        const product = await products.findByIdAndDelete(req.params.id)

        if(!product){
            return res.status(404).json({
                message: "Product Not Found..."
            });
        }
        res.json(product)
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};