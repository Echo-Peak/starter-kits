import * as React from 'react';
const {Component} = React;
//import {React} from 'react';
//import {Routes} from './routes';
import {Route} from 'react-router';

import Home from '../routes/home';
import NotFound from '../routes/404';

let bb : number = 232;
let routes = (
    <div>
        <Route path='/' component={Home}></Route>
        <Route path='*' component={NotFound}></Route>
    </div>
    
)
export default routes
