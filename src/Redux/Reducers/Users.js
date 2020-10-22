const initialState = {
  data: [],
  loading: false,
}

const Users = (state = initialState, action = {}) => {
  switch(action.type) {

    // Users Request
    case 'USERS_REQUEST':
    return{
      ...state,
      loading: true,
    }

    // Users Success
    case 'USERS_SUCCESS':
    return{
      ...state,
      loading: false,
      data: action.payload
    }

    // Users Error
    case 'USERS_ERROR':
    return{
      ...state,
      loading: false,
      isLogin: false,
      data: [],
      error: action.payload
    }
    default:
      return state
  }
}

export const UserDelete = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'USER_DELETE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'USER_DELETE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'USER_DELETE_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data:[],
          error: action.payload
        };

      default:
        return state
    }
}
export const UserEdit = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'USER_EDIT_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'USER_EDIT_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'USER_EDIT_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data:[],
          error: action.payload
        };

      default:
        return state
    }
};
export default Users;
