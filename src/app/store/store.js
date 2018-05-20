import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducers';

export const store = (preloadedState) => {
    const middlewares = [];

    const middlewaresEnhancers = applyMiddleware(...middlewares);
    const storeEnhancers = [middlewaresEnhancers];
    const composedEnhancers = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancers
    );

    /**
     * @ { Hot Reloading for reducers changes }
     */
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/rootReducers', () => {
                const newRootReducer = require('../reducers/rootReducers').default;
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store;
}