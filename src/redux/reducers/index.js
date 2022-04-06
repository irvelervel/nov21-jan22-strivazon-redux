import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'blablabla':
    // return { // the new state... }
    default:
      return state
  }
}

export default mainReducer
