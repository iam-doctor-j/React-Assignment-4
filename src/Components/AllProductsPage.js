import React from 'react';
import DataApi from '../Data/DataApi';
import ProductsList from './ProductsList';
import { Link, Prompt } from 'react-router-dom';
import ProductStore from '../stores/ProductStore';
import InitializationActions from '../actions/InitializationActions'

export default class AllProductsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ProductStore.getAllProducts()
        }
    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange);
        InitializationActions.initProducts();
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState({data: ProductStore.getAllProducts()});
    }

    render() {
        console.log(this.state);
        return(
            <div style={{ marginLeft: 10 }}>
                <Prompt message={params => params.pathname.includes("/products/") ? "Are you sure you want to view the details?" : true } />
                <h1>
                    Products List
                </h1>
                <ProductsList data={ this.state.data } />
                <p>
                    <Link to="/addProduct">Add Product</Link>
                </p>
            </div>
        );
    }
}