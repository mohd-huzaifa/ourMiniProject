
import { ChangeData } from "./ChangeData";
import { combineReducers } from "redux";
import { orderReducer } from "./OrderReducer";
const rootReducers = combineReducers({
    ChangeData ,
    orderReducer
})

export default rootReducers;