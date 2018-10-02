import {createStore} from 'redux';
import reducer from './reducers/addProductToCartd';
const store = createStore(reducer)
export default store;