import {
    ADD_FEATURE,
    REMOVE_FEATURE,
    EDIT_FEATURE,
    THUMB_UP_FEATURE,
    THUMB_DOWN_FEATURE
  } from "./types";
  
  function features(state = [], action) {
    switch (action.type) {
      case ADD_FEATURE:
        return [
          {
            id: action.data.id,
            votes: 0,
            ...action.data
          }, 
          ...state];
  
      case REMOVE_FEATURE:
        return state.filter(FEATURE => FEATURE.id !== action.data.id);
  
      case EDIT_FEATURE:
        return state.map(FEATURE => {
          if (FEATURE.id === action.data.id) {
              return { ...action.data, votes: FEATURE.votes }
          } 
          return FEATURE
        });
         
      case THUMB_UP_FEATURE:
        return state.map(FEATURE => {
            if (FEATURE.id === action.data.id) {
                return { ...FEATURE, votes: FEATURE.votes + 1 }
            }
            return FEATURE
        });
        
      case THUMB_DOWN_FEATURE:
        return state.map(FEATURE => {
            if (FEATURE.id === action.data.id) {
                return { ...FEATURE, votes: FEATURE.votes - 1 }
            }
            return FEATURE
        });   
  
      default:
        return state;
    }
  
  }
  
  export default features;