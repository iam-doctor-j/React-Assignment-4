import React from 'react';
import FormikAddProductForm from './AddProductForm';
import ProductStore from '../stores/ProductStore';
import { withRouter } from 'react-router-dom';

class AddProduct extends React.Component {
    constructor(params) {
        super(params);
        console.log(params);
        this._navigate = this._navigate.bind(this);
        this.history = params.history;
    }

    componentDidMount() {
        ProductStore.addChangeListener(this._navigate);
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._navigate);
    }

    _navigate() {
        this.history.push('/products');
        
    }

    render() {
        return(
            <>
            <h1>Add product</h1>
                <FormikAddProductForm />
            </>
        );
    }
}

export default withRouter(AddProduct);