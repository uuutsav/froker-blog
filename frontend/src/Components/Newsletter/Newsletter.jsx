import React, { useState } from 'react';
import styles from './Newsletter.module.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.content}>
        <img src="newsletter.png" alt="Newsletter" className={styles.image} />
        <div className={styles.text}>
          <h2>Subscribe to our newsletter to get the latest updates and news</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;