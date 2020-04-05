import React from 'react';
import Product from './Product';

export default class ProductsList extends React.Component {
    
    render() {
        let headings = [];
        if(this.props.data.length > 0)
            headings = Object.keys(this.props.data[0])
        let infoItems = headings.map((item, i) => {
            return(
                <th key={i}>
                    { item === 'id' ? 'ID' : item === 'productName' ? 'Product Name' : item }
                </th>
            );
        });

        let listItems = this.props.data.map((item, i) => {
            return(
                <Product key={i} item={ item } />
            );
        });

        if(this.props.data.length > 0){
            return(
                <table border="1">
                    <thead>
                        <tr>
                            { infoItems }
                        </tr>
                    </thead>
                    <tbody>
                        { listItems }
                    </tbody>
                </table>
            );
        } else {
            return <h2>Loading...</h2>
        }
    }
}