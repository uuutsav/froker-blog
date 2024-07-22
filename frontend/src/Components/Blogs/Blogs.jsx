import React from 'react'
import Hero from '../Hero/Hero'
import FeaturedBlogs from '../FeaturedBlogs/FeaturedBlogs'
import RecentPostsComponent from '../RecentPostsComponent/RecentPostsComponent'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Blogs() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <FeaturedBlogs />
                <RecentPostsComponent />
                <Newsletter />
            </main>
            <Footer />
        </div>
    )
}

export default Blogs
