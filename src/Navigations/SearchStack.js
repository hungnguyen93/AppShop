import ProductDetail from '../components/Main/Shop/ProductDetail/ProductDetail';
import SearchView from '../components/Main/Shop/Search/SearchView';
import { createStackNavigator } from 'react-navigation';
const SearchStack = createStackNavigator(
    {
        SearchView: {
            screen: SearchView
        },
        ProductDetail: {
            screen: ProductDetail,
            
        },
    },
    {
        initialRouteName: 'SearchView',
        navigationOptions: {
            header: null,
            },
    },
    
);
export default SearchStack;