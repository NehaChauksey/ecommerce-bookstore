import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Header from './header'
import DetailBook from './detailbook'
import Cart from './cart'
import Myorders from './myorders'
import Buy from './buy'



class Container extends Component {
    render() {
        return (
            <React.Fragment>
            
                <div className="main">
                <Header/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/details/:id' component={DetailBook} />
                        <Route exact path='/cart' component={Cart} />
                        <Route exact path='/myorders' component={Myorders} />
                        <Route exact path='/buy' component={Buy} />
                        
                    </Switch>
                </div>
            </React.Fragment>

        )
    }
}

export default Container;