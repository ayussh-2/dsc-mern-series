import Author from "../models/author.model.js";

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        return res.json({
            authors,
            status: 200,
        });
    } catch (error) {
        console.error("Error in author controller: ", e);
        return res.json({
            status: 500,
            message: "intenal server error",
        });
    }
};
