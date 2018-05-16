import React from "react";
import { Route } from "react-router-dom";
import { navSwitch } from "../navSwitch";

const Kampsteri = ({ routes }) => {

    const kampsteriData = navSwitch.kampsteri;

    return(
        <div>
            <h1 className="headline">Kampsteri</h1>
            {kampsteriData.routes.map((route, i) => {
                return (
                    <Route path={kampsteriData.path + route.path} key={i} component={route.component}/>
                )
            })}
        </div>
    )   
};



export { Kampsteri };