import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import FeaturedBlogs from './Components/FeaturedBlogs/FeaturedBlogs'
import RecentPostsComponent from './Components/RecentPostsComponent/RecentPostsComponent'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'
import Blogs from './Components/Blogs/Blogs'
import Blog from './Components/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="*" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
