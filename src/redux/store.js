import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/reducer';
import logger from 'redux-logger'

export default function configureStore() {
 return createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
}
