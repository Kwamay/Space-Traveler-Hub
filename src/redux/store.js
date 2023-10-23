import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';
import DragonReducer from './Dragon/dragonSlice';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
  dragon: DragonReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
