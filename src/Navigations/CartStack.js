import ProductDetail from '../components/Main/Shop/ProductDetail/ProductDetail';
import CartView from '../components/Main/Shop/Cart/CartView';
import { createStackNavigator } from 'react-navigation';
const CartStack = createStackNavigator(
    {
        CartView: {
            screen: CartView
        },
        ProductDetail: {
            screen: ProductDetail,
            
        },
    },
    {
        initialRouteName: 'CartView',
        navigationOptions: {
            header: null,
            },
    },
    
);
export default CartStack;