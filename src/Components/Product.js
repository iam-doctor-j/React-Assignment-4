import React from 'react';
import { Link } from 'react-router-dom';

export default class Product extends React.Component {
    render() {
        return(
            <tr>
                <td>
                    { this.props.item.id }
                </td>
                <td>
                    <Link to={"products/"+ this.props.item.id }>{ this.props.item.productName }</Link>
                </td>
                <td>
                    { this.props.item.Quantity }
                </td>
                <td>
                    Rs. { this.props.item.Price }
                </td>
            </tr>
        );
    }
}