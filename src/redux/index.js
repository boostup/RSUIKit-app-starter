import { combineReducers } from 'redux';
import { reducer as AppStarterReducer } from './appStarterAPI'

const rootReducer = combineReducers({
   appStarterReducer: AppStarterReducer,
});

export default rootReducer;
