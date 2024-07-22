import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import styles from './Blog.module.css'
import Footer from '../Footer/Footer';

function Blog() {
    const { id } = useParams();
    return (
        <div>
            <Header />
            <div className={styles.main}>
                {/* Navigation thing */}
                {/* Image over which title will sit  */}
                {/* author plus 2 minute read then likes */}
                {/* actual blog */}
                {/* popular posts  + pagination component(seems not working)*/}
                {/* newsletter  */}
                {/* Footer  */}
                <Footer />
            </div>


            <h2>BLog no {id}</h2>
        </div>
    )
}

export default Blog
