// Write your code here
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

function About() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const status = !isDarkTheme
          ? {
              about_url:
                'https://assets.ccbp.in/frontend/react-js/about-light-img.png',
              about_alt: 'about-light',
              color: 'grey',
            }
          : {
              about_url:
                'https://assets.ccbp.in/frontend/react-js/about-dark-img.png',
              about_alt: 'about-dark',
              color: 'dark',
            }
        return (
          <>
            <NavBar />
            <div className="home_page">
              <img src={status.about_url} alt={status.about_url} />
              <h1 className={status.color}>About</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default About
