import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h2 className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </h2>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/services/">Services</Link>
          </li>
          <li>
            <Link to="/projects/">Personal Projects</Link>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Eddie-Z">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/eddie-zheng-356092201/">
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
