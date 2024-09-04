import {createStore, combineReducers} from 'redux';

// Reducers
const rewardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'COLLECT_REWARD':
      return [...state, action.payload];
    case 'REMOVE_REWARD':
      return state.filter(reward => reward.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  rewards: rewardsReducer,
});

export const store = createStore(rootReducer);
