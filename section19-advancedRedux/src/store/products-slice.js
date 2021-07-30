import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 'p1',
            title: 'Test',
            price: 6,
            description: 'This is a first product - amazing!'
        },
        {
            id: 'p2',
            title: 'Cocktail',
            price: 3.5,
            description: 'Pina Collada extravagant.'
        },
        {
            id: 'p3',
            title: 'Flogger',
            price: 10,
            description: 'Hard flogger for soft butts.'
        },
    ]
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    // reducers: {
    //     getItems(state) {
    //         return state.items;
    //     }
    // }
})

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;