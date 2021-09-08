import { createStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { randomVideoReducer } from './reducers/videoReducers';
import { IVideoReducer } from '../utils/types';

const reducers = combineReducers({
  randomVideos: randomVideoReducer,
});

const middleware = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type State = ReturnType<typeof  reducers>
