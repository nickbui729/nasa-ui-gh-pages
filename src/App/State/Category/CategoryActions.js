import * as ActionTypes from '../ActionTypes';

export const addSelectedCategory = (data) => ({
    type: ActionTypes.AddSelectedCategory,
    payload: {data}

});