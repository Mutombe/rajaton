import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({ 
  title, 
  description, 
  keywords = '',
  image = '/og-image.jpg',
  url,
  type = 'website',
  article = null 
}) {
  const siteTitle = 'Rajaton Brand Solutions'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const defaultDescription = "Your trusted partner for route-to-market excellence, key account management, and private label development across South Africa."
  const finalDescription = description || defaultDescription
  const siteUrl = 'https://rajaton.co.za'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={image} />
      
      {/* Article specific */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'Organization',
          "name": siteTitle,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": finalDescription,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cape Town",
            "addressCountry": "ZA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+27-11-XXX-XXXX",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO