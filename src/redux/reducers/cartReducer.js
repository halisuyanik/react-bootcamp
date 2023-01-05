
import { cartItems } from "../initialValues/cartItems"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../store/actions/cartActions";

const initializeState={
    cartItems:cartItems
}

export default function cartReducer(state=initializeState, {type, payload}){
    switch (type) {
        case ADD_TO_CART:
            let product=state.cartItems.find(x=>x.product.id===payload.id);
            if(product){
                product.quantity+=1;
                return{...state}
            }
            else{
                return{...state, cartItems:[...state.cartItems,{quantity:1, product:payload}]}
            }
            // return { cartItems: [payload, ...state.cartItems] };
        case REMOVE_FROM_CART:
            return{...state, cartItems:state.cartItems.filter(x=>x.product.id!==payload.id)}
        default:return state;
    }
}