import * as React from 'react'
import Helmet from 'react-helmet'
import './index.css'

export default React.memo(({ children }) => {
  const title = `Lov & War`
  const description = `Katie Lovan and Rocky Warren's Wedding Website.`
  const siteUrl = `https://www.lovandwar.com/`
  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { property: 'og:url', content: siteUrl },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { itemProp: 'name', content: title },
          { itemProp: 'description', content: description }
        ]}
        link={[
          { rel: 'canonical', href: siteUrl },
          {
            rel: 'stylesheet',
            href:
              'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400'
          }
        ]}
      />
      {children}
    </div>
  )
})
