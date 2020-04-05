import React from 'react';
import { Link } from 'react-router-dom';
import ProductStore from '../stores/ProductStore';
import { ProductActions } from '../actions/ProductActions';

export default class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            product: ProductStore.getProductDetail()
        }
        console.log(this.state)
    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onDataAvailable);
        console.log(this.props.match.params.id);
        ProductActions.getProduct(this.props.match.params.id);
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onDataAvailable);
    }

    _onDataAvailable = () => {
        this.setState({product: ProductStore.getProductDetail()})
        console.log(this.state);
    }

    render() {
        return(
            <>
                <h1>Product Details</h1>
                <p>
                    <strong>Product Name: </strong> { this.state.product.productName }
                </p>
                <Link to="/products">Back</Link>
            </>
        );
    }
}