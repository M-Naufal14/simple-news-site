import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import newsData from './data/news.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewsList from './components/NewsList'

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
        <h1 className="text-center mb-4">Berita Terbaru</h1>

        {/* Pass state data to NewsList component */}
        <NewsList news={news} />
      </main>

      <Footer />
    </div>
  )
}

export default App
