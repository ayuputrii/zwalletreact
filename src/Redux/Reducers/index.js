import { combineReducers } from 'redux'
import Auth from './Auth'
import Users from './Users'
import { UserDelete, UserEdit } from './Users'

const reducers = combineReducers({
    Auth,
    Users,
    UserDelete,
    UserEdit,
})

export default reducers
