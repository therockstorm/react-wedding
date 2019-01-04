import React from 'react'

export default React.memo(({ to, children }) => (
  <a href={to} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
))
