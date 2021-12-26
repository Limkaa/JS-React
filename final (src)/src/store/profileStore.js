import { accounts } from "../Accounts"

export default function profile(state = {loginned: false, account: null}, action) {
    switch (action.type) {
        case 'login':
            const username = action.payload.username
            const password = action.payload.password
            const account = accounts.filter((item) => item.name === username)
            if (account !== null && account.length > 0) {
                if (password === account[0].password) {
                    return {...state, loginned: true, account: account[0]}
                } else {
                    alert('Incorrect credentials provided!')
                    return state
                }
            } 
            alert('Account with such credentials does not exist!')
            return state

        case 'logout':
            return {...state, loginned: false, account: null}

        case 'deposit_money':
            const value = prompt("Enter a Value", "100")
            if (!value) return state
            const amount = parseInt(value, 10);
            if (isNaN(amount)) {
                alert('Enter a number!')
                return state 
            }
            const balance = Math.ceil(state.account.balance + amount)
            return {...state, loginned: true, account: {...state.account, balance}}


        case 'buy_one_product':
            if (Number(action.payload) < state.account.balance) {
                alert('You successfully bought that product!')
                const balance = Math.ceil(state.account.balance - action.payload)
                return {...state, loginned: true, account: {...state.account, balance}}
            } else {
                alert('Not enough money on balance!')
                return state
            }

        case 'buy_many_products':
            const amounts = action.payload.map((item) => item.quantity * item.product.price)
            const totalAmount = amounts.reduce((a, b) => a + b)
            if (totalAmount < state.account.balance) {
                alert('You successfully bought all products!')
                const balance = Math.ceil(state.account.balance - totalAmount)
                return {...state, loginned: true, account: {...state.account, balance}}
            } else {
                alert('Not enough money on balance!')
                return state
            }

        default:
            return state
    }
}