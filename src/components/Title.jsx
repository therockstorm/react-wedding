import React from 'react'

export default React.memo(({ style, title, children }) => {
  const styles = {
    title: {
      padding: '0 0 0 16px'
    }
  }

  return (
    <div style={style}>
      <div style={styles.title}>{title}</div>
      {children}
    </div>
  )
})
