import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Sidebar from 'react-sidebar'
import SidebarContent from '../components/SidebarContent'
import Svg from 'react-inlinesvg'
import Title from '../components/Title'
import * as menu from '../img/menu.svg'
import * as bg from '../img/x.jpg'
import story from './story'
import proposal from './proposal'
import celebrate from './celebrate'
import gift from './gift'
import rest from './rest'

const page = (key, title, content) => ({
  key,
  title,
  content: (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  )
})

const backgroundColor = '#fff'
const opacity = 0.75
const sidebarWidth = 220
const contentWidth = 650
const contentPadding = 28
const mql = window.matchMedia(
  `(min-width: ${contentWidth + sidebarWidth + contentPadding * 2}px)`
)
const pages = [
  page(0, 'Our Story (So Far)', story),
  page(1, 'The Beach Proposal', proposal),
  page(2, "Let's Celebrate!", celebrate),
  page(3, 'Skip the Gift', gift),
  page(4, 'Rest Up', rest)
]

export default () => {
  const [docked, setDocked] = useState(mql.matches)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const styles = {
    bg: {
      backgroundSize: 'cover',
      backgroundImage: `url(${bg})`,
      backgroundPosition: '51% 50%',
      minHeight: '100%',
      left: 0,
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: -1
    },
    menu: {
      backgroundColor,
      opacity,
      padding: docked ? 0 : '8px 0 4px 0'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      minHeight: '80%'
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

  const onSelected = key => {
    if (!docked) setOpen(false)
    setSelected(key)
  }

  const toggleOpen = evt => {
    if (evt) evt.preventDefault()
    setOpen(!open)
  }

  const content = () => {
    const page = pages.find(k => k.key === selected)
    return page ? page.content : <h1>404</h1>
  }

  return (
    <Layout>
      <Sidebar
        sidebar={
          <SidebarContent
            pages={pages}
            style={{
              backgroundColor,
              opacity: Math.max(opacity, 0.95),
              width: sidebarWidth
            }}
            onSelected={onSelected}
          />
        }
        shadow={false}
        docked={docked}
        open={open}
        onSetOpen={onSetOpen}
      >
        <div style={styles.bg} />
        <Title
          style={styles.menu}
          title={
            <span>
              {!docked && (
                // eslint-disable-next-line
                <a onClick={toggleOpen} href="#">
                  <Svg src={menu} />
                </a>
              )}
            </span>
          }
        />
        <div style={styles.container}>
          <div style={styles.content}>{content()}</div>
        </div>
      </Sidebar>
    </Layout>
  )
}
