import { Link } from "react-router-dom";
import './lessons.css'

export default function Lessons() {
  return (
    <main className="page-container lessons-page">
      <header className="flex-box">
        <h1>Start learning with us</h1>
        <p>
          We offer personalized 1:1 presential / remote lessons that cover the whole process behind electronic music production. Some topics we cover:
        </p>
      </header>
      <section className="flex-box pills-list">
        <ul className="flex-box">
          <li>Ableton use</li>
          <li>Mixdown and advanced processing</li>
          <li>Music Business and how to aproach Labels</li>
          <li>How to go from a loop to a finished track</li>
          <li>Arrengment</li>
          <li>Sound design</li>
          <li className="button-pill">
              <Link to="/contact" className="contact-button flex-box">
            Set your class
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.27786 8.22222L14.4462 8.22222L6.6073 16.0517C6.42946 16.2295 6.32955 16.4707 6.32955 16.7222C6.32955 16.9737 6.42946 17.2149 6.6073 17.3928C6.78515 17.5706 7.02635 17.6705 7.27786 17.6705C7.52937 17.6705 7.77057 17.5706 7.94841 17.3928L15.7779 9.55389L15.7779 16.7222C15.7779 16.9727 15.8774 17.2129 16.0545 17.39C16.2316 17.5672 16.4718 17.6667 16.7223 17.6667C16.9728 17.6667 17.213 17.5672 17.3901 17.39C17.5672 17.2129 17.6667 16.9727 17.6667 16.7222L17.6667 7.27778C17.6653 7.15436 17.6396 7.03243 17.5912 6.91889C17.4954 6.68812 17.312 6.50473 17.0812 6.40889C16.9677 6.36049 16.8457 6.33483 16.7223 6.33333L7.27786 6.33333C7.02738 6.33333 6.78715 6.43284 6.61004 6.60995C6.43292 6.78707 6.33342 7.0273 6.33342 7.27778C6.33342 7.52826 6.43292 7.76848 6.61004 7.9456C6.78715 8.12272 7.02738 8.22222 7.27786 8.22222Z" fill="#30452B"/>
            </svg>
          </Link>
          </li>
        </ul>
      </section>

      <Link to="/contact" className="contact-button flex-box">
        Set your class
        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7.27786 8.22222L14.4462 8.22222L6.6073 16.0517C6.42946 16.2295 6.32955 16.4707 6.32955 16.7222C6.32955 16.9737 6.42946 17.2149 6.6073 17.3928C6.78515 17.5706 7.02635 17.6705 7.27786 17.6705C7.52937 17.6705 7.77057 17.5706 7.94841 17.3928L15.7779 9.55389L15.7779 16.7222C15.7779 16.9727 15.8774 17.2129 16.0545 17.39C16.2316 17.5672 16.4718 17.6667 16.7223 17.6667C16.9728 17.6667 17.213 17.5672 17.3901 17.39C17.5672 17.2129 17.6667 16.9727 17.6667 16.7222L17.6667 7.27778C17.6653 7.15436 17.6396 7.03243 17.5912 6.91889C17.4954 6.68812 17.312 6.50473 17.0812 6.40889C16.9677 6.36049 16.8457 6.33483 16.7223 6.33333L7.27786 6.33333C7.02738 6.33333 6.78715 6.43284 6.61004 6.60995C6.43292 6.78707 6.33342 7.0273 6.33342 7.27778C6.33342 7.52826 6.43292 7.76848 6.61004 7.9456C6.78715 8.12272 7.02738 8.22222 7.27786 8.22222Z" fill="#30452B"/>
        </svg>
      </Link>
    </main>
  )
}