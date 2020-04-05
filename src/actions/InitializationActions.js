import DataApi from "../Data/DataApi";
import Dispatcher from "../dispatcher/Dispatcher";
import * as ActionTypes from "../constants/ActionTypes";

export default class InitializationActions {
    static initProducts() {
        DataApi.getProducts(data => {
            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                products: data.data
            })
        });
    }
}