import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../../logo.svg'
import home from '../../img/browser.svg'
import hashtag from '../../img/hashtag.svg'
import notifications from '../../img/notification.svg'
import messages from '../../img/mail.svg'
import bookmarks from '../../img/bookmark.svg'
import lists from '../../img/list.svg'
import profile from '../../img/user.svg'
import more from '../../img/more.svg'

export default class Header extends Component {
  render() {
    return (
      <header className="w-25">
        <div className="items p-1">
          <div className="p-1">
            <div className="header ml-2">
              <h1>
                <Link to="/">
                  <img className="logo" src={logo} alt="logo" />
                </Link>
              </h1>
            </div>
            <nav id="sidebar">
              <ul className="list-unstyled components">
                <li className="p-2 list-item">
                  <Link style={{ textDecoration: 'none' }} to="/">
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={home} alt="home" /> <h5 className="m-3 text-option">Home</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-1 mt-1 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={hashtag} alt="explore" /> <h5 className="m-3 text-option">Explore</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-1 mt-1 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={notifications} alt="notifications" /> <h5 className="m-3 text-option">Notifications</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-1 mt-1 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={messages} alt="messages" /> <h5 className="m-3 text-option">Messages</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-1 mt-1 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={bookmarks} alt="bookmarks" /> <h5 className="m-3 text-option">Bookmarks</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-1 mt-1 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={lists} alt="lists" /> <h5 className="m-3 text-option">Lists</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-1 mt-1 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={profile} alt="profile" /> <h5 className="m-3 text-option">Profile</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-1 mt-1 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="option">
                      <div className="option-content">
                        <img className="home-icon ml-3" src={more} alt="more" /> <h5 className="m-3 text-option">More</h5>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="p-1 ml-3 list-item">
                  <Link style={{ textDecoration: 'none' }}>
                    <div className="btn-tweet mt-3">
                      <h5 className="text-white tweet-txt">Tweet</h5>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
