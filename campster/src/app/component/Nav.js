import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { navSwitch, NEWSFEED, PONUDAKURSEVA, UCENJE,KAMPSTERI } from './navSwitch';

const Nav = () => {

    const PageMenu = ({match, page}) => {
        return (
            navSwitch[page].routes.map((listItem, index) => {
                return (
                    <li className="menu-item" key={index}>
                        <NavLink activeClassName="active" to={match.url + listItem.path}>{listItem.name}</NavLink>
                    </li>
                )
            })
        )
    }

    return (
        <ul className="header-ul">
            <Route path="/ponuda-kurseva" render={({match, page})=><PageMenu match={match} page={PONUDAKURSEVA}/> } />
            <Route path="/newsfeed" render={({match, page})=><PageMenu match={match} page={NEWSFEED}/> } />
            <Route path="/ucenje" render={({match, page})=><PageMenu match={match} page={UCENJE}/> } />
            <Route path="/kampsteri" render={({match, page})=><PageMenu match={match} page={KAMPSTERI}/> } />
        </ul>
    )
}

export { Nav };