import React from 'react'
import Title from './Title'

export default React.memo(({ pages, style, onSelected }) => {
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
    }
  }

  const Link = (key, title) => (
    // eslint-disable-next-line
    <a key={key} href="#" style={styles.link} onClick={() => onSelected(key)}>
      {title}
    </a>
  )

  return (
    <Title style={styles.sidebar}>
      <div style={styles.content}>{pages.map(p => Link(p.key, p.title))}</div>
    </Title>
  )
})
