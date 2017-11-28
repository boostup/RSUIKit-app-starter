import { combineReducers } from 'redux';
import { reducer as StarterAppReducer } from './starterAppAPI'

const rootReducer = combineReducers({
   starterAppReducer: StarterAppReducer,
});

export default rootReducer;
