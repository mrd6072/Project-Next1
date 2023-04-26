import React, { useReducer, createContext } from 'react';

const initialState = {
    selecteditems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const sumItems = item => {
    const itemsCounter = item.reduce((total , product) => total + product.quantity, 0);
    let total = item.reduce((total , product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter , total};
}

const cartReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.selecteditems.find(item => item.id === action.payload.id)) {
                state.selecteditems.push({
                    ...action.payload,
                    quantity: 1         
                })
            }
            return {
                ...state,
                selecteditems: [...state.selecteditems],
                ...sumItems(state.selecteditems),
                checkout: false,
            }
        case "REMOVE_ITEM":
            const newSelecteditems = state.selecteditems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selecteditems: [...newSelecteditems],
                ...sumItems(newSelecteditems),

            }
        case "INCREASE":
            const indexI = state.selecteditems.findIndex(item => item.id === action.payload.id);
            state.selecteditems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selecteditems),

            }
        case "DECREASE":
            const indexD = state.selecteditems.findIndex(item => item.id === action.payload.id);
            state.selecteditems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selecteditems),

            }
        case "CHECKOUT" :
            return {
                selecteditems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selecteditems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
            default: 
            return state;
    }
    }   
   

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(cartReducer , initialState)

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;