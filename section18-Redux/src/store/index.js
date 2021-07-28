import {createStore} from "redux";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showCounter: false
}

createSlice({
   name: 'counter',
   initialState,
   reducers: {
       increment(state) {
           state.counter++;
       },
       decrement(state) {
           state.counter--;
       },
       increase(state, action) {
           state.counter += action.payload;
       },
       toggleCounter(state) {
           state.showCounter = !state.showCounter;
       }
   }
});

const counterReducer = (state =  initialState, action) => {
    // setting new state overwrites the old one, not merge it
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'INCREASE') {
        return {
            counter: state.counter + action.payload,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'TOGGLE') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;