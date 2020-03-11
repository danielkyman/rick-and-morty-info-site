import { combineReducers } from "redux";
import character from "./character";
import episode from "./episode";
import location from "./location";

export default combineReducers({ character, episode, location });
