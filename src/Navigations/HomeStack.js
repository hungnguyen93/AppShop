import ProductDetail from '../components/Main/Shop/ProductDetail/ProductDetail';
import ListProduct from '../components/Main/Shop/ListProduct/ListProduct';
import HomeView from '../components/Main/Shop/Home/HomeView';
import { createStackNavigator } from 'react-navigation';
const HomeStack = createStackNavigator(
    {
        HomeView: {
            screen: HomeView,
        },
        ListProduct: {
            screen: ListProduct
        },
        ProductDetail: {
            screen: ProductDetail,
            
        },
    },
    {
        initialRouteName: 'HomeView',
        navigationOptions: {
            header: null,
            },
    },
    
);
export default HomeStack;