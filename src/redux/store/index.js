import { createStore } from 'redux'
import mainReducer from '../reducers'
// this app has to share a cart array

export const initialState = {
  cart: {
    products: [],
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
