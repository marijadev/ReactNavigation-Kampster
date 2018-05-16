import React from "react";
import { Route } from "react-router-dom";
import { navSwitch } from "../navSwitch";

const Newsfeed = () => {

    const newsfeedData = navSwitch.newsfeed;

    return(
        <div>
            <h1 className="headline">Newsfeed</h1>
            {newsfeedData.routes.map((route, i) => {
                return (
                    <Route path={newsfeedData.path + route.path} key={i} component={route.component}/>
                )
            })}
        </div>
    )   
};



export { Newsfeed };