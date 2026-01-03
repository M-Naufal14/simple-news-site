import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import newsData from './data/news.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    // Simulating data fetching
    setNews(newsData)
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="container flex-grow-1">
        <h1 className="text-center mb-4">Latest Headlines</h1>

        {/* Debugging: Check if data is loaded */}
        <div className="alert alert-success text-center">
          Loaded {news.length} news items from local JSON.
        </div>

        {/* Placeholder for NewsList */}
        <div className="text-center text-muted">
          (NewsList component will appear here in the next step)
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
