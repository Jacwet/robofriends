import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';



const logger = createLogger({});
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}><App/> </Provider> 
  </React.StrictMode>
);
reportWebVitals();