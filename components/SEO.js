import Head from 'next/head';

const SEO = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />
    <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
  </Head>
);

export default SEO;