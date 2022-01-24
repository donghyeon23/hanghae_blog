const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
    },
    writer: {
        type: String
    },
    content: {
        type: String
    },
    password: {
        type: String
    },
    date: {
        type: String
    },
});

module.exports = mongoose.model("Posts", postsSchema);