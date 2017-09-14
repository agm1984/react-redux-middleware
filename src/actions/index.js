import axios from 'axios'

import {
    FETCH_USERS
} from './types'

export function fetchUsers() {
    const response = axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data.reduce((all, user) => {
            all.push(user)
            return all
        }, []))

    return {
        type: FETCH_USERS,
        payload: response
    }
}