import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoryReducer from './Category/CategoryReducer';


export default createStore(
    combineReducers({
        CategoryReducer,
       
        
    }),
    {}, //intial state for store states
  
)