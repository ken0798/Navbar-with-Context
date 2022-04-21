// Write your code here

import NavBar from '../Navbar'
import './index.css'

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="home_page">
        <img
          className="not_pic"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1>Lost Your Way?</h1>
        <p>We cannot seem to find the page you are looking for</p>
      </div>
    </>
  )
}

export default NotFound
