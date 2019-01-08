import React from 'react'
import Svg from 'react-inlinesvg'
import Sidebar from 'react-sidebar'
import AppBar from './AppBar'
import Layout from './Layout'
import SidebarContent from './SidebarContent'
import menu from '../img/menu.svg'

export default React.memo(
  ({ content, docked, links, onSetOpen, open, styles, toggleOpen }) => {
    return (
      <Layout>
        <Sidebar
          sidebar={
            <SidebarContent links={links} style={styles.sidebarContent} />
          }
          shadow={false}
          docked={docked}
          open={open}
          onSetOpen={onSetOpen}
          transitions={false}
        >
          <div style={styles.bg} />
          <AppBar
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
            <div style={styles.content}>{content}</div>
          </div>
        </Sidebar>
      </Layout>
    )
  }
)
