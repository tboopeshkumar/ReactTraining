import * as ActionTypes from "./ActionTypes"
import * as productService from "./ProductService"

export function loading(status){
    return {
        type : ActionTypes.LOADING,
        loading: status
    }
}
 
//async
export function getProducts() {
    return function(dispatch){
        dispatch(loading(true));
        productService.fetchProducts()
            .then((products)=> {
                dispatch(loading(false));
                dispatch({
                    type: ActionTypes.INIT_PRODUCTS,
                    products : products // ES6- allowing just products i.e without key . it takes products as key and value
                })
            });
    }
}




//returns a function, that shall be executed by thunk
export function getProduct(id) {
    return function(dispatch) {
        console.log("Called by thunk ", id,  dispatch);

        productService.fetchProduct(id)
        .then ( (product) => {
            dispatch( {
                type: ActionTypes.EDIT_PRODUCT,
                product: product
            })
        })
    }
}

export function getBrands() {
    return function(dispatch) {
        console.log("Called by thunk ",  dispatch);

        productService.fetchBrands()
        .then ( (brands) => {
            dispatch( {
                type: ActionTypes.INIT_BRANDS,
                brands: brands
            })
        })
    }
}

export function updateProduct(product) {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        product: product
    }
}

export function saveProduct(product) {
    return function(dispatch) {
        productService.saveProduct(product)
        .then ( () => {
            alert("product saved successfully")
        })
    }
}