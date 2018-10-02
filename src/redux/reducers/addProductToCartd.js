const defaultArrCartd = [];

const arrCartd = (state = defaultArrCartd, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [{
                id: action.param.id,
                name: action.param.name,
                price: action.param.price,
                image: action.param.images[0],
                quantity: action.quantity
            }].concat(state)
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