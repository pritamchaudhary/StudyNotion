const Category = require("../models/Category");

// createTag handler function

exports.createCategory = async (req, res) => {
    try {
        // fetch data from req.body
        const {name, description} = req.body;

        // validation
        if(!name || !description){
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            })
        }

        // tag entry in db
        const categoryDetails = await Category.create({
            name: name,
            description: description,
        })
        console.log(categoryDetails);

        // return response
        return res.status(200).json({
            success: true,
            message: 'Category Created Successfully',
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// getAllTags handler function

exports.showAllCategories = async(req, res) => {
    try {
       const allCategories = await Category.find({}, {name:true, description:true});
       
       res.status(200).json({
        success: true,
        message: 'All Categories returned successfully',
        allTags,
       })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}