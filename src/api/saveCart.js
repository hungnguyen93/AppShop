import { AsyncStorage } from 'react-native';
const saveCart = async (arrCart) => {
    try {
        await AsyncStorage.setItem('cart', JSON.stringify(arrCart));
      } catch (error) {
      }
};
export default saveCart;