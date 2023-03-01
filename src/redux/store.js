import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'; 
import reducerAddBooks from './reducer/reducerAddBooks';
import thunk from 'redux-thunk';
import reducerFetchedBooks from './reducer/reducerFetchBooks';


const rootreducer = combineReducers({
    library: reducerAddBooks,
    search: reducerFetchedBooks
})


const store = createStore(rootreducer, applyMiddleware(thunk));

export default store; 

