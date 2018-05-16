import React from 'react';
import { Link, Route } from 'react-router-dom';
import { navSwitch } from './navSwitch';
import '../css/Footer.css';
const Footer = () => {
    const FooterMenu = () => {
        return(
            Object.entries(navSwitch).map((listItem, index) => {
                return (
                    <li className="main-menu-item" key={index}>
                         <Link to={listItem[1].path}>{listItem[1].name}</Link>
                     </li>
                )
            })  
        )    
    }

    return (
        <footer>
            <ul className="footer-ul">
                <Route path="/" render={() => <FooterMenu/>} />
            </ul>
        </footer>
    );
}

export { Footer };