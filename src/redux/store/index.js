import { createStore } from 'redux'
import mainReducer from '../reducers'
// this app has to share a cart array
// now let's also introduce a "user login" feature

export const initialState = {
  cart: {
    products: [
      // this should be filled with book objects
    ],
  },
  user: {
    name: '',
  },
}

const configureStore = createStore(
  // 1) the main reducer of the application (or the only one)
  mainReducer,
  // 2) the initial state for your redux store
  initialState,
  // 3) an enhancer function, for extensions or middlewares
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
