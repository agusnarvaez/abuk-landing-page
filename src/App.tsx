import './App.css'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Services = lazy(() => import('./pages/Services/Services'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MemoryRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>

      </Suspense>
    </>
  )
}


