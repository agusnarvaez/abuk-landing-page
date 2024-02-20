import './services.css'
import ServiceCard from "src/components/ServiceCard/ServiceCard"
import img from 'src/assets/backgrounds/mix-and-mastering.webp'
import { Link } from 'react-router-dom'
import HelmetData from 'src/components/HelmetData'
export default function Services() {
  const services = [
    {
      title: 'Mixdown',
      data:[
        {
          service: 'Up to 15 stems',
          price: 100
        },
        {
          service: 'Up to 30 stems',
          price: 125
        },
        {
          service: 'Up to 45 stems',
          price: 165
        },
        {
          service: 'More than 45 stems',
          price: 200
        }
      ]
    },
    {
      title: 'Mastering',
      data:[
        {
          service: '1 track',
          price: 50
        },
        {
          service: '2 tracks',
          price: 75
        },
        {
          service: '3 tracks',
          price: 100
        }
      ]
    },
    {
      title: 'Mix & Mastering',
      data:[
        {
          service: '1 track',
          price: 125
        },
        {
          service: '2 tracks',
          price: 175
        },
        {
          service: '3 tracks',
          price: 225
        }
      ]
    }
  ]
  const metaData = {
    title: "Mix and Mastering Services for your music",
    description: "We offer personalized mix and mastering services for your music. We can help you to get the best sound for your tracks. We work with all genres.",
    keywords: "Abuk, music, production, electronic, sound design, mixdown, arrangement, business",
    canonical: "https://abuk.com/services"
  }

  return (
    <main className="page-container services-page">
      <HelmetData metaData={metaData}/>
      <section className="prices flex-box">
        <h1>Mix & Mastering</h1>
        <ul className='flex-box'>
          {services.map((service, index) => (
            <li key={index} className='flex-box'>
              <ServiceCard title={service.title} data={service.data} />
            </li>
          ))
          }
        </ul>
      </section>

      <section className="preparation flex-box">

        <img src={img} alt="Mix and Mastering image" title='Mix and Mastering' />
        <div className="info flex-box">
          <h2>How to prepare your stems:</h2>
          <ul className='flex-box'>
            <li>Export your audio stems in WAV/AIFF files 24BITS/44.1KHz.</li>
            <li>Keep every process you have applied to your stems ON (EQ, compression, FX, etc.) and your master bus clear of any process.</li>
            <li>Check that there's no clipping</li>
            <li>Please send your Pre-mastered version</li>
            <li>Upload your files to Google Drive, We transfer or Dropbox and send us the link</li>
          </ul>
          <Link to='/contact' className='contact-button'>Send us your stem</Link>
        </div>

      </section>
    </main>
  )
}