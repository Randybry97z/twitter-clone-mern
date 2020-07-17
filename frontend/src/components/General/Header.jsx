import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../../logo.svg'

export default class Header extends Component {
  render() {
    return (
      <header className="w-25">
        <div className="items p-2">
          <div className="p-2">
            <div className="header">
              <h1 role="heading">
                <Link to="/">
                  <img className="logo" src={logo} alt="logo" />
                </Link>
              </h1>
            </div>
            <nav id="sidebar">
              <ul class="list-unstyled components">
                <li>
                  <Link>
                    Home
                  </Link>
                </li>
                <li>
                  <Link>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link>
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link>
                    Messages
                  </Link>
                </li>
                <li>
                  <Link>
                    Bookmarks
                  </Link>
                </li>
                <li>
                  <Link>
                    Lists
                  </Link>
                </li>
                <li>
                  <Link>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link>
                    More
                  </Link>
                </li>
                <li>
                  <Link>
                    Tweet
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
