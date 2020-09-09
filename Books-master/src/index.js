import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { bookReducer } from './reducers/reducer'
import { cartReducer } from './reducers/cartreducer'
import { formReducer } from './reducers/formreducer'
import { orderReducer } from './reducers/myordersreducer'
import { headerTitle } from './reducers/headerreducer'
import {detailbookReducer} from './reducers/reducer'
import {buyReducer} from './reducers/cartreducer'
import createSagaMiddleware from "redux-saga";

import { createStore, combineReducers,applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware();
const appStore = createStore(combineReducers({
  bookReducer: bookReducer,
  cartReducer: cartReducer,
  formReducer: formReducer,
  orderReducer: orderReducer,
  headerTitle:headerTitle,
  detailbookReducer:detailbookReducer,
  buyReducer:buyReducer
},applyMiddleware(sagaMiddleware)))


ReactDOM.render(<Provider store={appStore}>
  <BrowserRouter>
    <App /></BrowserRouter></Provider>
  , document.getElementById("root"));

serviceWorker.unregister();
