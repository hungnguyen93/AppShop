import Authentication from '../components/Authentication/Authentication';
import Register from '../components/Authentication/Register';
import ChangeInfo from '../components/ChangeInfo/ChangeInfo';
import OrderHistory from '../components/OrderHistory/OrderHistory';
import Main from '../components/Main/Main';
import { createStackNavigator } from 'react-navigation';
const RootStack = createStackNavigator(
    {
        Authentication: {
            screen: Authentication
        },
        ChangeInfo: {
            screen: ChangeInfo
        },
        OrderHistory: {
            screen: OrderHistory
        },
        Main: {
            screen: Main
        },
        Register: {
            screen: Register
        },
        
    },
    {
        initialRouteName: 'Main',
        navigationOptions: {
            header: null,
            },
    },
    
);
export default RootStack;