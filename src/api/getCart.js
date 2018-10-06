import { AsyncStorage } from 'react-native';
const getCart = async () => {
    try {
        const value = await AsyncStorage.getItem('cart');
        if (!!value) {
            return JSON.parse(value)
        } return [];
    } catch (error) {
        console.log(error)
        return [];
    }
};
export default getCart;