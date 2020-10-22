const TOKEN_KEY = 'jwt'

export const login = (props) => {
    localStorage.setItem(TOKEN_KEY, 'armadaniPutri')
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export const isLogin = ()=> {
    if(localStorage.getItem(TOKEN_KEY)) {
        return true
    }
    return false
}
