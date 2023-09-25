const { createSlice } = require("@reduxjs/toolkit");

// action.payload used to push passed parameter/value in function

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // pushing item in array
        state.push(action.payload)
    },
    remove: (state,action) => {
      // removing the passed product by using product id
        return state.filter((item) => item.id !== action.payload)
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;


// Action: Actions are JavaScript object that contains information. Actions are the only source of information for the store. It basically carries a payload of information from the application to the store. It only tells us what has happened. Actions have a type property that they must include as type property tells what kind of action to perform. Action can also contain the payload(data field in the action) to describe the action.

// Syntax:

// const Actions = {
//      type: '',
//      payload: ''
// }
// In the syntax, the Action object has two properties. The first property is “type property” it should be defined in string constraint and It is compulsory to include the type property in the object. The second one is “payload”, Payload stores the additional information about what happened. It is not a compulsion to include “payload” in the object. It is entirely up to you but we should always try to pass only the necessary information to the action object and try to keep it as light as possible. 