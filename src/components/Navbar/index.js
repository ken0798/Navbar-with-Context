// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class NavBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const status = !isDarkTheme
            ? {
                logo_url:
                  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
                logo_alt: 'logo_light',
                theme_url:
                  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
                theme_alt: 'dark_theme',
                bg_color: 'grey',
              }
            : {
                logo_url:
                  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
                logo_alt: 'logo_dark',
                theme_url:
                  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
                theme_alt: 'light_theme',
                bg_color: 'dark',
              }
          return (
            <nav className={`nav_bar nav_${status.bg_color}`}>
              <img
                className="nav_pic"
                src={status.logo_url}
                alt={status.logo_alt}
              />
              <div>
                <Link to="/" className={`nav_item nav_link ${status.bg_color}`}>
                  Home
                </Link>
                <Link to="/about" className={`nav_link ${status.bg_color}`}>
                  About
                </Link>
              </div>
              <img
                className="nav_pic"
                onClick={toggleTheme}
                src={status.theme_url}
                alt={status.theme_alt}
              />
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavBar
