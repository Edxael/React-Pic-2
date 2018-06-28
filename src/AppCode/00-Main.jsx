import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './css/style.css'
 
import Home from './01-Home'
import Page2 from './02-Page'
 

export default class extends React.Component{
    render(){
 
        return(
            <HashRouter>
                <div className="MainContainer">
            
                    <div className="menu1">
                        <Link className="menuButton" to="/">HOME</Link>
                        <Link className="menuButton" to="/2">PAGE-2</Link>
                    </div>
            
                    <hr/>
 
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/2" component={Page2}/>
                    </Switch>
 
                    <br/>
                    <hr/>
                    <div>By: Edmundo</div>
                    <hr/>

                    <br/>
            
                </div>
            </HashRouter>
        )
    }
}
 