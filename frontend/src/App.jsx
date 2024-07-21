import { useState } from 'react'
import styles from './App.module.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import FeaturedBlogs from './Components/FeaturedBlogs/FeaturedBlogs'
import RecentPostsComponent from './Components/RecentPostsComponent/RecentPostsComponent'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedBlogs />
        <RecentPostsComponent />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App
