import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';


import Landing from '../page/Landing';
import Client from '../page/Client';
import Ticketed from '../page/Ticketed';
import Campaigns from '../page/Campaigns';

function Approuter(){
    const history = createBrowserHistory();
    
    return(
        <Router history = {history}>
            <Switch>
               <Route exact path ='/' component={Landing}/>
               <Route path = "/client" component={Client}/>
               <Route path = "/ticketed" component={Ticketed}/>
               <Route path = "/campaigns" component={Campaigns}/>
            </Switch>
        </Router>
    )
}

export default Approuter