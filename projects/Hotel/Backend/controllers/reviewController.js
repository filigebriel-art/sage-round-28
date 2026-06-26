import Review from "../models/Review.js";

export const getReviews = async (req,res) => {
    try{
        const reviews = await Review.find()
        res.json(reviews)

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

export const createReview = async (req,res)=>{
    try{
        const review = await Review.create(req.body)
        res.status(201).json(review)

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


export const updateReview = async (req,res)=>{
    const review = await Review.findByIdAndUpdate(
        req.params.id,req.body,
        {new :true}
    )
    res.json(review)
}

export const deleteReview = async (req,res)=>{
    await Review.findByIdAndDelete(req.params.id)

    res.json({message:"Review deleted"})
}