import { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import './serviceCard.css'

interface ServiceCardProps {
  title: string
  data: {
    service: string
    price: number
  }[]
}

export default function ServiceCard({title,data}:ServiceCardProps) {
  const [show,setShow] = useState(false)

  const toggleHeader = () => {
    setShow(!show)
  }

  return (
    <article onClick={toggleHeader} data-testid='service-card' className={`service-card flex-box ${show?'show':""}`}>
      <header className='flex-box' >
        <h2 data-testid='service-card-title'>{title}</h2>
        <button
          data-testid='service-card-button'
          className={`service-card-button ${show?'show':""}`} type='button'>
            <div></div>
        </button>
      </header>
      <main
        data-testid='service-card-main-info'
        className={`flex-box ${show?'show':""}`}>
        <ul className='flex-box'>
          {
            data.map((item,index) => (
              <li data-testid='service-info' className='flex-box' key={index}>
                <h3>{item.service}</h3>
                <p>{item.price} EUR</p>
              </li>
            ))
          }
        </ul>
      </main>
    </article>
  )
}