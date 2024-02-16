import { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import './header.css'

interface HeaderProps {
  theme: string
  path: string
}

export default function Header({theme,path}:HeaderProps) {
  const [show,setShow] = useState(false)

  const isHome = () => {
    if (path === '/') {
      return ''
    }else{
      return 'show-title'
    }
  }

  const toggleHeader = () => {
    setShow(!show)
  }
  const closeHeader = () => {
    setShow(false)
  }

  return (
    <header data-testid='main-header' className={`main-header flex-box ${theme} ${isHome()}`}>
      <main className={`flex-box ${theme}`}>
        <Link data-testid='page-title' onClick={closeHeader} to='/'>ABUK</Link>
        <button
          data-testid='burger-button'
          onClick={toggleHeader} className={`burguer-button ${show?'show':""}`} type='button'><div></div></button>
      </main>
      <nav
        data-testid='nav'
      className={`flex-box ${show?'show':""}`}>
        <ul className='flex-box'>
          <li>
            <NavLink onClick={closeHeader} to="/about">ABOUT ME</NavLink>
          </li>
          <li>
            <NavLink onClick={closeHeader} to="/lessons">PRODUCT LESSONS</NavLink>
          </li>
          <li>
            <NavLink onClick={closeHeader} to="/services">MIX & MASTERING</NavLink>
          </li>
          <li>
            <NavLink onClick={closeHeader} to="/contact">CONTACT & BOOKING</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}