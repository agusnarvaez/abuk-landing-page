import { Link } from 'react-router-dom'
import './footer.css'
import logoBapps from 'src/assets/logos/logo-bapps-footer.svg'
interface FooterProps {
  theme: string
}
export default function Footer({theme}:FooterProps) {

  return (
    <footer className={`main-footer flex-box ${theme}`}>
      <h2>ABUK</h2>
      <nav className='flex-box'>
        <ul className='flex-box'>
          <li><Link data-testid='footer-link' to="services">Mix & Mastering</Link></li>
          <li><Link data-testid='footer-link' to="lessons">Product Lessons</Link></li>
          <li><Link data-testid='footer-link' to="about">Sobre Mi</Link></li>
          <li><Link data-testid='footer-link' to="contact">Reservá</Link></li>
        </ul>
      </nav>

      <ul className='footer-socials flex-box'>
        <li><a data-testid='social-link' className='fa fa-instagram' href='https://www.instagram.com/abukmusic/' rel='noreferrer' target='_blank'></a></li>
        <li><a data-testid='social-link' className='fa fa-facebook' href='https://www.instagram.com/abukmusic/' rel='noreferrer' target='_blank'></a></li>
        <li><a data-testid='social-link' className='fa fa-spotify' href='https://open.spotify.com/artist/4kYAGDsAQjBYuWNNBJNnNv?si=o2D5zzBeRnya8EdJM1kP8w' rel='noreferrer' target='_blank'></a></li>
      </ul>

      <section className='bapps-logo flex-box'>
        <img src={logoBapps} alt='Bapps Logo' />
      </section>
    </footer>
  )
}