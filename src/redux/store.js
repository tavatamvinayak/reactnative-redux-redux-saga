import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// saga
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

// fetch data
import Products_data from './saga/fetchData'

const store = configureStore({
  reducer:rootReducer,
  middleware:()=>[sagaMiddleware]
});


sagaMiddleware.run(Products_data)
export default store 
