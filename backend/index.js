const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Blog = require('./db.js')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const db_url = process.env.DB_CONNECTION_URL;

app.use(express.json());
app.use(cors());
mongoose.connect(db_url);

// Get total blog count
app.get('/blogs', async (req, res) => {
    try {
        const count = await Blog.countDocuments();
        // const test = await Blog.find({})
        // console.log(test)
        res.json({ total: count });
    } catch (err) {
        console.log("Error in get /blogs: ", err.message);
        res.status(500).json({ message: err.message });
    }
});

// Get featured blogs - top 3 blogs for homepage
app.get('/featured', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ likes: -1 }).limit(3);
        res.json(blogs);
    } catch (err) {
        console.log("Error in get /featured: ", err.message);
        res.status(500).json({ message: err.message });
    }
});

// Get recent blogs
app.get('/recent', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1 }).limit(9);
        res.json(blogs);
    } catch (err) {
        console.log("Error in get /recent: ", err.message);

        res.status(500).json({ message: err.message });
    }
});

// Get popular blogs
app.get('/popular', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ likes: -1 }).limit(9);
        res.json(blogs);
    } catch (err) {
        console.log("Error in get /popular: ", err.message);

        res.status(500).json({ message: err.message });
    }
});

// Get a specific blog
app.get('/blog/:id', async (req, resp) => {
    try {
        const blog = await Blog.findOne({ blog_id: req.params.id });
        if (blog) {
            resp.json(blog);
        } else {
            resp.status(404).json({ message: 'Blog not found' });
        }
    } catch (err) {
        console.log("Error in get /blog: ", req.params.id, err.message);

        resp.status(500).json({ message: err.message });
    }
});

// Like a blog
app.post('/blog/:id/like', async (req, resp) => {
    try {
        const blog = await Blog.findOneAndUpdate(
            { blog_id: req.params.id },
            { $inc: { likes: 1 } },
            { new: true }
        );
        if (blog) {
            resp.json(blog);
        } else {
            resp.status(404).json({ message: 'Blog not found' });
        }
    } catch (err) {
        resp.status(500).json({ message: err.message });
    }
});

app.post('/blog/:id/unlike', async (req, resp) => {
    try {
        const blog = await Blog.findOneAndUpdate(
            { blog_id: req.params.id },
            { $inc: { likes: -1 } },
            { new: true }
        );
        if (blog) {
            resp.json(blog);
        } else {
            resp.status(404).json({ message: 'Blog not found' });
        }
    } catch (err) {
        resp.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log("Server listening to port: ", port);
})