import './about.css'
import image from 'src/assets/backgrounds/about.webp'
import HelmetData from 'src/components/HelmetData'

export default function About() {
  const metaData ={
    title: "Abuk, Electronic Music Producer and DJ",
    description: "Argentinian DJ and Producer, born on July 2nd 1997 in Buenos Aires, is an outstanding artist who masterfully fuses the roots of melodic house & techno, creating a unique sound experience that captivates his audience. Based in Spain (Barcelona).",
    keywords: "Abuk, music, production, electronic, sound design, mixdown, arrangement, business",
    canonical: "https://abuk.com/about"
  }
  return (
    <main className="page-container about-page flex-box">
      <HelmetData metaData={metaData}/>
      <section className='banner'>
        <img src={image} alt='Imagen Abuk'/>
        <h1>Abuk</h1>
      </section>
      <section className='info flex-box'>
        <p>
          Argentinian DJ and Producer, born on July 2nd 1997 in Buenos Aires, is an outstanding artist who masterfully fuses the roots of melodic house & techno, creating a unique sound experience that captivates his audience. Based in Spain (Barcelona).
        </p>
        <p>
          In his passionate musical journey, Abuk transports you with precision through a labyrinth of sounds and grooves that immerse you in a sonic dimension where time fades away. His ability to create immersive tracks is unparalleled, and his music is an invitation to a spatial journey of emotions and sensations.
        </p>
        <p>
          Abuk is an integral part of the Amancay collective, a group of talented Argentine DJs and producers with a long history in the music scene. This collaboration enriches his perspective and allows him to continue to evolve as an artist.
        </p>
        <p>
          His music has had the support of great artists such as: <span className='bold'>John Digweed, Oliver Koletzki, Mind Against, Dixon, Âme, Solomun, Adriatique, Trikk, Laurent Garnier, Echonomist,</span> among others.
        </p>
        <p>
          Venues: <span className='bold'>Bahrein Club</span> (Argentina), <span className='bold'>La Biblioteca</span> (Argentina), <span className='bold'>Crobar Club</span> (Argentina), <span className='bold'>Imposible Club</span> (España), <span className='bold'>Gurú Dance Club</span> (España), <span className='bold'>About Blank</span> (Berlín), <span className='bold'>Dinsmoor Club</span> (México), <span className='bold'>Bar Américas</span> (México)
        </p>
        <p>
          Most of his music can be found on labels such as <span className='bold'>Stil Vor Talent, Radikon, Dessert, Amancay, Metrica, Rummel,</span> among others.
        </p>
      </section>
    </main>
  )
}