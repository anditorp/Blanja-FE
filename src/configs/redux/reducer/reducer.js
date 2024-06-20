import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
// import assetsReducer from './assetsReducer'


const rootReducer = combineReducers({
    auth: authReducer
    // assets: assetsReducer,
});

export default rootReducer