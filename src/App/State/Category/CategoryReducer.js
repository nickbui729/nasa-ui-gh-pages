import * as ActionTypes from "../ActionTypes";

let intitialState = {
    category: ""
}

let CategoryReducer = (state=intitialState, action) => {
    switch (action.type) {        
        case ActionTypes.AddSelectedCategory:
        
          
            return {
                    ...state, 
                    category: action.payload.data
                    }
        
        default:
            return state;
    }

}

export default CategoryReducer;