import { combineReducers } from "redux";
import {selectedHeader, selectedPackages, } from "./selectedHeader";
import authReducer from "./authReducer";
import adsReducer from './adsReducer';
import {modalReducer, modalReducer_leftButton} from "./modalReducer";


export default combineReducers({
  header: selectedHeader,
  auth: authReducer,
  pics: adsReducer,
  package: selectedPackages,
  modal: modalReducer,
  left: modalReducer_leftButton
});


