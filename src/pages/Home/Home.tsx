import './home.css'

import HelmetData from 'src/components/HelmetData'

export default function Home() {
  const metaData ={
    title: "Abuk, Electronic Music Producer and DJ",
    description: "Argentinian DJ and Producer, born on July 2nd 1997 in Buenos Aires, is an outstanding artist who masterfully fuses the roots of melodic house & techno, creating a unique sound experience that captivates his audience. Based in Spain (Barcelona).",
    keywords: "Abuk, music, production, electronic, sound design, mixdown, arrangement, business",
    canonical: "https://abuk.com"
  }
  return (
    <main className="page-container home-page">
      <HelmetData metaData={metaData}/>
      <h1>
        <span className='letter letter-A'>A</span>
        <span className='letter letter-B'>B</span>
        <span className='letter letter-U'>U</span>
        <span className='letter letter-K'>K</span>
      </h1>
    </main>
  )
}