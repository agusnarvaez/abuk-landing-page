import './notFound.css'
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <main className="page-container not-found-page">
      <h1>SEEMS LIKE YOU GOT LOST</h1>
      <h2>404 Error. The page you're looking for does not exist.</h2>
      <Link className="primary-button" to="/">Head back home</Link>
    </main>
  )
}