import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher/Dispatcher';
import * as ActionTypes from "../constants/ActionTypes";

let _products = [];
let _product = {
  "id": '',
  "productName": '',
  "Quantity": '',
  "Price": ''
}

class ProductStoreClass extends EventEmitter {
    addChangeListener(cb) {
      this.on('change', cb);
    }

    removeChangeListener(cb) {
      this.removeListener('change', cb);
    }

    emitChange() {
      this.emit('change');
    }

    getAllProducts() {
      return _products;
    }

    getProductDetail() {
      return _product;
    }
}

let ProductStore = new ProductStoreClass();

export default ProductStore;

Dispatcher.register(action => {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _products = action.products;
            ProductStore.emitChange();
            break;
        case ActionTypes.ADD_PRODUCT:
            _products.push(action.product);
            ProductStore.emitChange();
            break;
        case ActionTypes.VIEW_PRODUCT:
            _product = action.product;
            ProductStore.emitChange();
            break;
        default:
    }
})