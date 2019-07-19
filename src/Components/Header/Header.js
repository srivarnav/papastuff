import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header id="home">
                    <div className="container">
                        <div className="header d-lg-flex justify-content-between align-items-center py-sm-3 py-2 px-sm-2 px-1">
                            <div id="logo">
                                <h1><a href="index.html">Intense</a></h1>
                            </div>
                            <div className="nav_w3ls ml-lg-5">
                                <nav>
                                    <label for="drop" className="toggle">Menu</label>
                                    <input type="checkbox" id="drop" />
                                    <ul className="menu">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li>                                           
                                            <label for="drop-2" className="toggle toogle-2 active">Dropdown <span className="fa fa-angle-down"
                                                aria-hidden="true"></span>
                                            </label>
                                            <a href="#" className="active">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                            <input type="checkbox" id="drop-2" />
                                            <ul>
                                                <li><a href="portfolio.html" className="drop-text">Portfolio</a></li>
                                                <li><a href="single.html" className="drop-text active">Blog Post</a></li>
                                                <li><a href="index.html" className="drop-text">More</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li className="nav-right-sty mt-lg-0 mt-sm-4 mt-3">
                                            <a href="login.html" className="reqe-button text-uppercase">Login</a>
                                            <a href="register.html" className="reqe-button text-uppercase">Register</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;