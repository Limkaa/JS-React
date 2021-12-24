import { accounts } from "../Accounts"

export default function profile(state = {loggined: false}, action) {
    switch (action.type) {
        case 'login':
            const username = action.payload.username
            const password = action.payload.password
            const account = accounts.filter((item) => item.name === username)[0]
            if (account !== null && password === account.password)
                return {...state, loginned: true, profile: account}
            return state

        case 'logout':
            return {loginned: false}

        default:
            return state
    }
}