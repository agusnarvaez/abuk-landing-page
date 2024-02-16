import React from 'react'
import ReactDOM from 'react-dom/client'

import { Suspense, lazy } from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Services = lazy(() => import('./pages/Services/Services'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const Lessons = lazy(() => import('./pages/Lessons/Lessons'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children:[
      { path:"", element:<Home/> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      { path: 'lessons', element: <Lessons /> }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)