import React, { useState, useEffect } from 'react';
import styles from './RecentPostsComponent.module.css';
import pagenationStyles from './Pagenation.module.css'
// import Pagination from '../Pagination/Pagination';

function RecentPostsComponent() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/recent`)
      .then(response => response.json())
      .then(data => {
        setRecentPosts(data);
        setTotalPages(Math.ceil(data.length / 9));
      })
      .catch(error => console.error('Error fetching recent posts:', error));
  }, [currentPage]);

  return (
    <section className={styles.recentPosts}>
      <h2>Recent Posts</h2>
      <div className={styles.grid}>
        {recentPosts.map(post => (
          <div key={post.blog_id} className={styles.postCard}>
            <img src={post.image} alt={post.title} />
            <div className={styles.postInfo}>
              <p className={styles.author}>by {post.author} - {new Date(post.date).toLocaleDateString()}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.blog_id}`} className={styles.readMore}>Read More...</a>
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </section>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={pagenationStyles.pagination}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      {[...Array(totalPages).keys()].map(page => (
        <button
          key={page + 1}
          onClick={() => onPageChange(page + 1)}
          className={currentPage === page + 1 ? pagenationStyles.active : ''}
        >
          {page + 1}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
}

export default RecentPostsComponent;