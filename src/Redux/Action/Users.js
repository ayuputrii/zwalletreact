import Axios from 'axios'

const UsersRequest = ()=> {
    return{
        type: 'USERS_REQUEST'
    }
}

const UsersSuccess = (data)=> {
    return{
        type: 'USERS_SUCCESS',
        payload: data
    }
}
const UserError = (error)=> {
    return{
        type: 'USERS_ERROR',
        payload: error
    }
}

///delete
const UserDeleteRequest = ()=> {
    return{
        type: 'USER_DELETE_REQUEST'
    }
}

const UserDeleteSuccess = (data)=> {
    return{
        type: 'USER_DELETE_SUCCESS',
        payload: data
    }
}
const UserDeleteError = (error)=> {
    return{
        type: 'USER_DELETE_ERROR',
        payload: error
    }
}

//edit
const UserEditRequest = ()=> {
    return{
        type: 'USER_EDIT_REQUEST'
    }
}

const UserEditSuccess = (data)=> {
    return{
        type: 'USER_EDIT_SUCCESS',
        payload: data
    }
}
const UserEditError = (error)=> {
    return{
        type: 'USER_EDIT_ERROR',
        payload: error
    }
}

// Users
export const GetUsers = (fields) => {
  return(dispatch) => {
    dispatch(UsersRequest())
    return Axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/profile?page${fields.page}&limit=${fields.limit}`,
      header:{
        'authorization': `Bearer + ${fields.token}`
      }
    })
    .then((res) => {
      const data = res.data.data
      console.log(data, 'testToken')
      dispatch(UsersSuccess(data))
    })
    .catch((err) => {
      const message = err.message
      dispatch(UserError(message))
    })
  }
}

export const DeleteUsers = (fields) => {
  return(dispatch) => {
    dispatch(UsersRequest())
    return Axios({
      method: 'DELETE',
      url: `http://localhost:5000/api/v1/profile/${fields.id_profile}`,
      header:{
        'authorization': `Bearer + ${fields.token}`
      }
    })
    .then((res) => {
      const data = res.data
      console.log(data, 'delete')
      dispatch(UsersSuccess(data))
    })
    .catch((err) => {
      const message = err.message
      dispatch(UserError(message))
    })
  }
}

export const EditUser = (fields) => {
    return (dispatch) =>{
        dispatch(UserEditRequest())
        return Axios({
            method: 'PATCH',
            url: `http://localhost:5000/api/v1/profile/:${fields.id_profile}`,
            data: {
                username: fields.username,
                phone: fields.phone,
            },
            header:{
              'authorization': `Bearer + ${fields.token}`,
            }
        }).then((res)=> {
            const data = res.data.data
            console.log(data)
            dispatch(UserEditSuccess(data))
            fields.history.push('/Admin')
        }).catch((err)=> {
            const message = err
            dispatch(UserEditError(message))
        })
    }
}

// Top Up
export const GetTopup = (fields) => {
  return(dispatch) => {
    dispatch(UsersRequest())
    return Axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/topup?page${fields.page}&limit=${fields.limit}`,
      header:{
        'authorization': `Bearer + ${fields.token}`
      }
    })
    .then((res) => {
      const data = res.data.data
      console.log(data, 'testToken')
      dispatch(UsersSuccess(data))
    })
    .catch((err) => {
      const message = err.message
      dispatch(UserError(message))
    })
  }
}

// Transfer
export const GetTransfer = (fields) => {
  return(dispatch) => {
    dispatch(UsersRequest())
    return Axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/transfer?page${fields.page}&limit=${fields.limit}`,
      header:{
        'authorization': `Bearer + ${fields.token}`
      }
    })
    .then((res) => {
      const data = res.data.data
      console.log(data, 'testToken')
      dispatch(UsersSuccess(data))
    })
    .catch((err) => {
      const message = err.message
      dispatch(UserError(message))
    })
  }
}
