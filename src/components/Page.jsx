import React, { useEffect, useState } from 'react'
import Content from './Content'
import Layout from './Layout'
import bg from '../img/x.jpg'

const create = (idx, title, link) => ({ idx, title, link })
const links = [
  create(0, 'A Wedding!', '/'),
  create(1, 'Our Story (So Far)', '/story'),
  create(2, 'The Beach Proposal', '/proposal'),
  create(3, "Let's Celebrate!", '/celebrate'),
  create(4, 'Skip the Gift', '/gift'),
  create(5, 'Rest Up', '/rest')
]

const backgroundColor = '#E5E3E0'
const opacity = 0.75
const sidebarWidth = 220
const contentWidth = 650
const contentPadding = 28
const mql =
  typeof window === 'undefined'
    ? { matches: false, addListener: () => {}, removeListener: () => {} }
    : window.matchMedia(
        `(min-width: ${contentWidth + sidebarWidth + contentPadding * 2}px)`
      )

export default ({ idx, body, hideTitle }) => {
  const [docked, setDocked] = useState(mql.matches)
  const [open, setOpen] = useState(false)
  const styles = {
    bg: {
      backgroundSize: 'cover',
      backgroundImage: `url(${bg})`,
      backgroundPosition: '51% 0%',
      minHeight: '100%',
      left: 0,
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: -1
    },
    sidebarContent: {
      backgroundColor,
      opacity: Math.max(opacity, 0.95),
      width: sidebarWidth
    },
    menu: {
      backgroundColor,
      opacity
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      minHeight: '40%'
    },
    content: {
      maxWidth: `${contentWidth}px`,
      minWidth: '260px',
      margin: '80px 10px',
      backgroundColor,
      opacity,
      padding: `16px ${contentPadding}px`
    }
  }

  const mediaQueryChanged = () => {
    setOpen(false)
    setDocked(mql.matches)
  }

  useEffect(() => {
    mql.addListener(mediaQueryChanged)
    return () => mql.removeListener(mediaQueryChanged)
  })

  const onSetOpen = open => setOpen(open)

  const toggleOpen = evt => {
    if (evt) evt.preventDefault()
    setOpen(!open)
  }

  return (
    <Layout>
      <Content
        content={
          <div>
            {!hideTitle && <h1>{links[idx].title}</h1>}
            {body}
          </div>
        }
        docked={docked}
        links={links}
        onSetOpen={onSetOpen}
        open={open}
        styles={styles}
        toggleOpen={toggleOpen}
      />
    </Layout>
  )
}
