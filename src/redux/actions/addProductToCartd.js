export function addProductToCartd(param,quantity){
    return{
        type: 'ADD_PRODUCT',
        param,
        quantity
    }
};