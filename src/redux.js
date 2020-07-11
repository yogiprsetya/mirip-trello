import {
  combineReducers,
  createStore,
} from 'redux';

// actions
export const darkMode = mode => ({
  type: 'DARK_MODE',
  mode,
});

export const lightMode = () => ({
  type: 'LIGHT_MODE',
});

// reducers
export const mode = (state = {}, action) => {
  switch (action.type) {
    case 'DARK_MODE':
      return action.mode;
    case 'LIGHT_MODE':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  mode,
});

// store
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
