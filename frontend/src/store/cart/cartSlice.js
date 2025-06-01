import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice(
    {
        name:'cart',
        initialState :
        {
            cartList : [],
            total : 0,
            status: false
        },

        reducers:
        {
            add(state,action){
                const updatedCartList = state.cartList.concat(action.payload);
                const updatedTotal = state.total + ( action.payload.quantity*action.payload.price)
               
              
                return {...state,cartList : updatedCartList,total : updatedTotal,status:true};
              
                

            },
            remove(state,action)
            { 
              
                const updatedCartList = state.cartList.filter((item)=>item.id !== action.payload.id);
                console.log(updatedCartList);

            },
            change_status(state)
            {
                state.status = false;
                console.log('sts :',state.status)
            }

        }

    }
)
export const { add,remove ,change_status} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;