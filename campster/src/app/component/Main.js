import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { Newsfeed } from './newsfeed/Newsfeed';
import { PonudaKurseva } from './ponudaKurseva/PonudaKurseva';
import { Ucenje } from './ucenje/Ucenje';
import { Kampsteri } from './kampsteri/Kampsteri';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Route path="/newsfeed" component={Newsfeed}/>
                <Route path="/ponuda-kurseva" component={PonudaKurseva}/>
                <Route path="/ucenje" component={Ucenje}/>
                <Route path="/kampsteri" component={Kampsteri}/>
            </div>
        )
    }
}

export { Main };