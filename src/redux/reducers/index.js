import { ADD_TO_CART, REMOVE_FROM_CART, SET_USERNAME } from '../actions'
import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'blablabla':
    // return { // the new state... }
    case ADD_TO_CART:
      // the action here carries a type but also a payload
      return {
        // the new object we return from ANY case
        // must look like the one we started from
        ...state,
        cart: {
          ...state.cart,
          //   products: state.cart.products.concat(action.payload), // I need to add my new book at the end of this
          // state.cart.products.push() <-- DON'T DO THIS, terrible thing! :O
          // .push() modifies the array you call it on, so it modifies your arguments! pure function r.i.p.
          // another valid solution is using the spread operator ...
          products: [...state.cart.products, action.payload],
        },
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          // action.payload is the index of the element I need to remove from products
          products: state.cart.products.filter(
            (book, i) => i !== action.payload
          ),
          //   products: [
          //     ...state.cart.products.slice(0, action.payload),
          //     ...state.cart.products.slice(action.payload + 1),
          //   ],
        },
      }

    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      }

    default:
      return state
  }
}

export default mainReducer

// PUSH IS FORBIDDEN IN A PURE FUNCTION
// SPLICE IS FORBIDDEN IN A PURE FUNCTION
