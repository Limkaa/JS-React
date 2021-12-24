export default function cart(state = [], action) {
    switch (action.type) {
        case 'add_item':
            const product = action.payload.product
            let quantity = action.payload.quantity
            const items = state.filter(item => {
                if (item.product.id === product.id) {
                    quantity += item.quantity
                  return false
                }
                return true
            });
            return ([...items, {product, quantity}])

        case 'delete_item':
            return ([...state.filter(item => item.product.id !== action.payload.id)])
            
        case 'decrease_item_quantity':
            const index = action.payload
            state[index].quantity -= 1
            if (state[index].quantity <= 0) {
                state.splice(index, 1);
            }
            return ([...state])

        case 'increase_item_quantity': 
            state[action.payload].quantity += 1
            return ([...state])

        default:
            return state
    }
}