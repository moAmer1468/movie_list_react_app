/**
 * Waht are The steps required here
 * 1- create the store
 * 2- create reducers
 * 3- wrap the application with provider
 * 4- useSelectors
 * 5- useDispatch
 * 6- make RootReducer
 *
 */
import { moviesReducer } from "../reducers/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // This is used as an alternative to async await method in actions
export const store = createStore(moviesReducer, applyMiddleware(thunk));
