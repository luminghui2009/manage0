import React from 'react';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Login from './pages/login/index';
import Home from './container/index';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="*" component={Home}/>
                            <Redirect from="*" to="/index"/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
