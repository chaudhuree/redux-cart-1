export const DECREASE="DECREASE";
export const INCREASE="INCREASE";
export const REMOVE="REMOVE";
export const CLEAR_CART="CLEAR_CART";
export const GET_TOTALS="GET_TOTALS";


// action creators
export const removeItem=(id)=>{
    return {
        type:REMOVE,
        payload:{
            id
        }
    }
}
export const increaseItem=(id)=>{
    return {
        type:INCREASE,
        payload:{
            id
        }
    }
}
export const decreaseItem=(id,amount)=>{
    return {
        type:DECREASE,
        payload:{
            id,amount
        }
    }
}
export const clearCart=()=>{
    return {
        type:CLEAR_CART
    }
}
export const getTotals=()=>{
    return {
        type:GET_TOTALS
    }
}
