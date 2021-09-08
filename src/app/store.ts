import { createStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  
});

const initialState = {
  
};

const middleware = [thunk];

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
