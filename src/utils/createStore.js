import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import {reducer} from '../reducer/reducer';
import CreateSagaMiddleware from 'redux-saga'
import landingPageSaga from '../saga/landingPageSaga'


const sagaMiddleware = CreateSagaMiddleware();

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(landingPageSaga)

export default store;