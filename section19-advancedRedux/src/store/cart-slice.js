import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    itemsTotal: 0,
    itemsAmount: 0,
    isShown: false
}

// function countItemsAmount(items) {
//     return items.reduce((curr, prev) => prev = curr.price * curr.quantity, 0);
// }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleShow(state) {
            state.isShown = !state.isShown
        },
        addToCart(state, action) {
            const actionItem = action.payload;
            let existingItemIndex = state.items.findIndex(item => item.title === actionItem.title);

            if (existingItemIndex >= 0) {
                const foundItem = state.items[existingItemIndex];
                state.items[existingItemIndex].quantity += 1;
                state.items[existingItemIndex].total = foundItem.quantity * foundItem.price;
            } else {
                state.items.push({
                    title: actionItem.title,
                    description: actionItem.description,
                    price: actionItem.price,
                    quantity: 1,
                    total: actionItem.price,
                    id: actionItem.id
                })
            }

            state.itemsTotal += 1;
            state.itemsAmount += actionItem.price;
        },
        removeFromCart(state, action) {
            const actionItem = action.payload;
            let existingItemIndex = state.items.findIndex(item => item.title === actionItem.title);

            if (existingItemIndex >= 0) {
                const foundItem = state.items[existingItemIndex];
                if (state.items[existingItemIndex].quantity > 1) {
                    state.items[existingItemIndex].quantity -= 1;
                    state.items[existingItemIndex].total = foundItem.quantity * foundItem.price;
                } else {
                    // state.items.splice(existingItemIndex, 1);
                    // or Max used:
                    state.items = state.items.filter(item => item.title !== actionItem.title);
                }

                state.itemsTotal -= 1;
                state.itemsAmount -= foundItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;