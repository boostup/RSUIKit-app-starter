import { combineReducers } from 'redux';
import { reducer as DemoReducer } from './demo_api'

const rootReducer = combineReducers({
   demoReducer: DemoReducer,
});

export default rootReducer;
