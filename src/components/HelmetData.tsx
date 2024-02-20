
//* REACT-HELMET
import { Helmet,HelmetProvider } from 'react-helmet-async'

interface MetaProps {
    metaData:{
        title: string
        description: string
        keywords: string
        canonical: string
    }
}


export default function HelmetData({metaData}:MetaProps) {

    return (
        <HelmetProvider>
            <Helmet>
                <title>{metaData.title}</title>
                <meta name="keywords" content={metaData.keywords} />
                <meta name="description" content={metaData.description} />

                <meta property="og:title" content={`${metaData.title}`}/>
                <meta property="og:description" content={metaData.description} />
                <meta property="og:url" content={metaData.canonical} />

                <meta name="twitter:title" content={metaData.title} />
                <meta name="twitter:description" content={metaData.description} />

                <link rel="canonical" href={metaData.canonical} />
            </Helmet>
        </HelmetProvider>
    )
}