import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.waves}>
                <img src="waves-footer.svg"></img>
                {/* TODO: Add image for waves from originak site */}
            </div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src="logo.png" alt="Froker Logo" />
                </div>
                <div className={styles.quicklinks}>
                    <h3>Quicklink</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/privacy">Privacy policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <h3>Contacts</h3>
                    <p>Whitefield, Bengaluru, 560066</p>
                    <p>support@froker.in</p>
                    <div className={styles.social}>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className={styles.download}>
                    <h3>Scan To Download</h3>
                    <img src="qr.jpg" alt="QR Code" />
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; 2024 Arroz Technology. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
