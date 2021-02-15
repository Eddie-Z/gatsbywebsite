import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/about/">Services</Link>
          </li>
          <li>
            <Link to="/projects/">Personal Projects</Link>
          </li>
          <li>
            <Link to="/blog/">Github</Link>
          </li>
          <li>
            <Link to="/contact/">Linkedin</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
