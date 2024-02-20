import { Outlet,useLocation } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './index.css'
export default function App() {
  const path = useLocation().pathname
  const selectTheme = () => {
    if (path === '/' || path === '/contact' || path === '/lessons') {
      return 'light-theme'
    }else{
      return 'dark-theme'
    }
  }
    return (
      <>
        <Header theme={selectTheme()} path={path}  />
        <Outlet  />
        <Footer theme={selectTheme()} />
      </>
    )
  }