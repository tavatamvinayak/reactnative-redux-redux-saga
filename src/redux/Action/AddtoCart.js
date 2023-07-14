import { ADD_TO_CART, REMOVE_TO_CART, USER_LIST } from "../Constant/contant"

export function add_to_cart(item) {
    return {
        type:ADD_TO_CART,
        data:item
}
}
export function remove_to_cart(item) {
        return{
            type:REMOVE_TO_CART,
            data:item
        }
}
export function getUserList(item) {
    return{
        type:USER_LIST,
        
    }
}