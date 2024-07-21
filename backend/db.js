const mongoose = require("mongoose");
require('dotenv').config();

const db_url = process.env.DB_CONNECTION_URL;

mongoose.connect(db_url);

const blogSchema = new mongoose.Schema({
    blog_id: { type: Number, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    likes: { type: Number, default: 0 },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    date: { type: Date, default: Date.now },
    image: {
        type: String,
        required: true,
        default: "404_1.jpg"
    }
});

// auto increment id before saving 
blogSchema.pre('save', async function (next) {
    if (this.isNew) {
        const lastBlog = await this.constructor.findOne({}, {}, { sort: { 'blog_id': -1 } });
        this.blog_id = lastBlog ? lastBlog.blog_id + 1 : 1;
    }
    next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;