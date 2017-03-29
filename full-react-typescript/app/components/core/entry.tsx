import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from "react";
import * as ReactRouter from 'react-router';
const { Router , browserHistory } = ReactRouter;

import routes from './router';

interface appProp {
    
}
interface appState{
    
}

export class Application extends Component<appProp , appState>{
    render(){
        return (
            <div>
                <Router history={browserHistory}>
                {routes}
                </Router>
            </div>    
        )
    }
}
ReactDOM.render(<Application/> , document.getElementById('app'))