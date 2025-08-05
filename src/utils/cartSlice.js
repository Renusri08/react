import {createSlice} from "@reduxjs/toolkit";
//vanialla(older) Redux =>DON'T MUTATE STATE,returning was mandatory
        //const newState=[...state];
        //newState.items.push(action.payload);
        //return m=newState


        //Redux toolkit
        //we have to mutate the state
        //still redux follows older convention of creating new state but it is inbuilt no need for developers to 
        //do all those stuff.
        //Redux internally uses immer js(library) internally.
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],//cart items
    },
    reducers:{//actions we want to perform

        


        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;//make []
        }
    }
});


export const{addItem,removeItem,clearCart}=cartSlice.actions;//exporting actions

export default cartSlice.reducer;//it is mandatory