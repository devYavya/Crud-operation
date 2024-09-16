import Product from"../modal/ProductModel.js";

export const create = async(req, res)=>{
    try
    {
        const ProductData = new Product(req.body);

        if(!ProductData)
        {
            return res.status(404).json({msg:"Product not found"});
        }
        const saveData = await ProductData.save();
        res.status(200).json(saveData);
    }
    catch(error)
    {
        res.status(500).json({error:err});
    }

}

export const getAll = async(req,res) =>
{
    try{
        const ProductData = await Product.find();

        if(!ProductData)
        {
            return res.status(404).json({msg:"Product not found"});
        }

        res.status(200).json(ProductData);

    }
    catch(error)
    {
        res.status(500).json({error:err});
    }
}

export const getOne = async (req, res) => {
    try {
        const productId = req.params.id;
        const productExist = await Product.findById(productId);

        if (!productExist) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json(productExist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const update = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });// update kr rahi hai yaha pe 

        if (!updatedProduct) {
            return res.status(401).json({ msg: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}