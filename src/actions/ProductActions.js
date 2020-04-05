import axios from "axios";
import DataApi from "../Data/DataApi";
import Dispatcher from "../dispatcher/Dispatcher";
import * as ActionTypes from "../constants/ActionTypes";

export class ProductActions {
    static addProduct(product) {
        let newProduct = {
            "productName": product.productName,
            "Quantity": product.productQuantity,
            "Price": product.productPrice
        };
        console.log('Dispatching product');
        console.log(newProduct);
        DataApi.addProduct(newProduct, (res) => {
            console.log(res);
            Dispatcher.dispatch({
                actionType: ActionTypes.ADD_PRODUCT,
                product: res.data
            });
        })
        
    }

    static getProduct(id) {
        DataApi.getProduct(id, res => {
            console.log(res);
            Dispatcher.dispatch({
                actionType: ActionTypes.VIEW_PRODUCT,
                product: res.data
            })
        });
    }
}