const defaultArrCartd = [];

const arrCartd = (state = defaultArrCartd, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [{
                id: action.param.id,
                name: action.param.name,
                price: action.param.price,
                images: action.param.images.map(e => e),
                quantity: 1
            }].concat(state)
        case 'DELETE_PRODUCT':
            return state.filter(e => e.id !== action.id)
        case 'ADD_QUANTITY':
            return state.map(e => {
                if(e.id !== action.id) return e;
                return { ...e, quantity: e.quantity + 1 }
            })
        case 'DECREASE_QUANTITY':
            return state.map(e => {
                if(e.id !== action.id) return e;
                return {...e, quantity: e.quantity - 1}
            })
        default: return state
    }
}
export default arrCartd;