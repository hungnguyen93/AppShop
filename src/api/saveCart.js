import { AsyncStorage } from 'react-native';
const saveCart = async (arrCart) => {
    // if(!!arCart){
        await AsyncStorage.setItem('@cart', JSON.stringify(arrCart))
    // } else await AsyncStorage.setItem('@cart', [])
};
export default saveCart;