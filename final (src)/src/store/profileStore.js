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

        case 'buy_one_product':
            if (Number(action.payload) < state.account.balance) {
                alert('You successfully bought that product!')
                const balance = Math.ceil(state.account.balance - action.payload)
                return {...state, loginned: true, account: {...state.account, balance}}
            } else {
                alert('Not enough money on balance!')
                return state
            }

        default:
            return state
    }
}