import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Layout from "@/components/organisms/Layout"
import Home from "@/components/pages/Home"
import About from "@/components/pages/About"
import TrainingMain from "@/components/pages/TrainingMain"
import WorkshopDetail from "@/components/pages/WorkshopDetail"
import Services from "@/components/pages/Services"
import ServiceDetail from "@/components/pages/ServiceDetail"
import BookEvent from "@/components/pages/BookEvent"
import BookReview from "@/components/pages/BookReview"
import BookTraining from "@/components/pages/BookTraining"
import Blog from "@/components/pages/Blog"
import Contact from "@/components/pages/Contact"
import Privacy from "@/components/pages/Privacy"
import Terms from "@/components/pages/Terms"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="training" element={<TrainingMain />} />
            <Route path="workshop/:id" element={<WorkshopDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="service/:id" element={<ServiceDetail />} />
            <Route path="book-event" element={<BookEvent />} />
            <Route path="book-review" element={<BookReview />} />
            <Route path="book-training" element={<BookTraining />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  )
}

export default App