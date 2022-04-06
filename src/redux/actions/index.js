// here we're going to create action creators

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

export const addToCartAction = (book) => ({
  // what is an action? a JS object with at least a 'type' property
  type: ADD_TO_CART,
  // ok, but which is the book I just clicked on?
  payload: book,
  // the payload is additional info you need to carry with the action
})

export const removeFromCartAction = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
})

export const setUsernameAction = (name) => ({
  type: SET_USERNAME,
  payload: name,
})
