import React from "react";
import { Route } from "react-router-dom";
import { navSwitch } from "../navSwitch";

const Ucenje = ({ routes }) => {

    const ucenjeData = navSwitch.ucenje;

    return(
        <div>
            <h1 className="headline">Ucenje</h1>
            {ucenjeData.routes.map((route, i) => {
                return (
                    <Route path={ucenjeData.path + route.path} key={i} component={route.component}/>
                )
            })}
        </div>
    )   
};



export { Ucenje };