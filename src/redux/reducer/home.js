const initHomeState = {
  food: [],
  new_taste: [],
  popular: [],
  recommended: [],
};

export const homeReducer = (state = initHomeState, action) => {
  if (action.type === 'SET_FOOD') {
    return {
      ...state,
      food: action.value,
    };
  }
  if (action.type === 'SET_NEW_TASTE') {
    return {
      ...state,
      new_taste: action.value,
    };
  }
  if (action.type === 'SET_POPULAR') {
    return {
      ...state,
      popular: action.value,
    };
  }
  if (action.type === 'SET_RECOMMENDED') {
    return {
      ...state,
      recommended: action.value,
    };
  }
  return state;
};
