import React, { useEffect, useState } from 'react'
import { htmlToText } from 'html-to-text'
import styles from './FeaturedBlogs.module.css'

function FeaturedBlogs() {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/featured')
            .then(response => response.json())
            .then(data => {
                setFeaturedBlogs(data)
                console.log(data)
            })
            .catch(error => console.error('Error fetching featured blogs:', error));
    }, []);

    const convertAndTrimContent = (htmlContent, length) => {
        const plainText = htmlToText(htmlContent, {
            wordwrap: 130,
        });
        return plainText.length > length ? plainText.substring(0, length) + '...' : plainText;
    };

    return (
        <section className={styles.featuredBlogs}>
            {featuredBlogs.map(blog => (
                <div key={blog.blog_id} className={styles.blogCard}>
                    <img src={blog.image} alt={blog.title} />
                    <div className={styles.blogInfo}>
                        <p className={styles.author}>by {blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
                        <h3>{blog.title}</h3>
                        <p>{convertAndTrimContent(blog.content, 100)}...</p>
                        <a href={`/blog/${blog.blog_id}`} className={styles.readMore}>Read More...</a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default FeaturedBlogs
