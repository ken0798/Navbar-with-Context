// Write your code here
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

function Home() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const status = !isDarkTheme
          ? {
              home_url:
                'https://assets.ccbp.in/frontend/react-js/home-light-img.png',
              home_alt: 'home-light',
              color: 'grey',
            }
          : {
              home_url:
                'https://assets.ccbp.in/frontend/react-js/home-dark-img.png',
              home_alt: 'home-dark',
              color: 'dark',
            }
        return (
          <>
            <NavBar />
            <div className="home_page">
              <img src={status.home_url} alt={status.home_alt} />
              <h1 className={`${status.color}`}>Home</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
