import React from 'react'
import Link from 'gatsby-link'
import AppBar from './AppBar'

export default React.memo(({ links, style, onSelected }) => {
  const styles = {
    sidebar: {
      height: '100%',
      ...style
    },
    content: {
      padding: '16px'
    },
    link: {
      display: 'block',
      padding: '16px 0',
      textDecoration: 'none'
    },
    divider: {
      margin: '0px 0',
      height: 1,
      backgroundColor: '#DBDBDB'
    }
  }

  const Item = (idx, text, link, last) => (
    <div key={idx}>
      <Link to={link} style={styles.link}>
        {text}
      </Link>
      {!last && <div style={styles.divider} />}
    </div>
  )

  return (
    <AppBar style={styles.sidebar}>
      <div style={styles.content}>
        {links.map(l =>
          Item(l.idx, l.title, l.link, l.idx + 1 === links.length)
        )}
      </div>
    </AppBar>
  )
})
