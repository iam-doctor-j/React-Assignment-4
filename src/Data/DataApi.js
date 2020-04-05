import axios from 'axios';

export default class DataApi {
    static getProducts(cb) {
        axios.get('http://localhost:4000/products')
        .then(res => cb(res))
        .catch(error => { throw error });
    }

    static addProduct(product, cb) {
        axios.post('http://localhost:4000/products', product)
        .then(res => cb(res))
        .catch(err => {throw err});
    }

    static getProduct(id, cb) {
        axios.get('http://localhost:4000/products/'+id)
        .then(res => cb(res))
        .catch(error => { throw error });
    }
}