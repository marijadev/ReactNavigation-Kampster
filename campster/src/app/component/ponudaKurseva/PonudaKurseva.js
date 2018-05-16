import React from "react";
import { Route } from "react-router-dom";
import { navSwitch } from "../navSwitch";

const PonudaKurseva = () => {
    const ponudaKursevaData = navSwitch.ponudaKurseva;

    return(
        <div>
            <h1 className="headline">Ponuda Kurseva</h1>
            {ponudaKursevaData.routes.map((route, i) => {
                return (
                    <Route path={ponudaKursevaData.path + route.path} key={i} component={route.component}/>
                )
            })}
        </div>
    )   
}

export { PonudaKurseva };