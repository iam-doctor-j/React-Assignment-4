import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import About from './About';
import AllProductsPage from './AllProductsPage';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';

export default class Home extends React.Component {
    render() {
        return(
            <>
            <Router>
                <nav>
                    <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row'}}>
                        <li style={{marginRight: 10}}>
                            <NavLink to="/" exact activeStyle={{ color: 'red' }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeStyle={{ color: 'red' }}>Products</NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={ About } />
                    <Route path="/products" exact component={ AllProductsPage } />
                    <Route path="/products/:id" component={ ProductDetails } /> 
                    <Route path="/addProduct" exact component = { AddProduct } />
                </Switch>
            </Router>
            </>
        );
    }
}