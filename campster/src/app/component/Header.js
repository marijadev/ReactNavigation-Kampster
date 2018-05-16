import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-inner">
                    <div className="header-left">
                        <div className="header-logo-holder">
                            <Link to="/">
                                <img className="kampster" src="./logo.png" alt="logo" />
                            </Link>
                            <span className="logo-separator"></span>
                        </div>
                    </div>
                    <div className="header-center">
                        <nav className="header-nav">
                            <Nav />
                        </nav>
                    </div>
                    <div className="header-right">
                        <a href="#">
                            <div className="notifications-holder header-right-children">
                                <img className="notifications" src="./bell.png" alt="icon"/>
                            </div>
                        </a>
                        <a href="#">
                            <div className="points-holder header-right-children">
                                <img className="points" src="./points.png" alt="points" />
                            </div>
                        </a>
                        <a href="#" className="avatar-wrapper">
                            <div className="avatar-inner-wrapper header-right-children">
                                <div className="avatar-holder">M</div>
                                <div className="arrow-holder">
                                    <img className="arrow" src="./arrow.png" alt="arrow" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export { Header };