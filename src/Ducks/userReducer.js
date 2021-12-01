import axios from 'axios';

const initialState = {
  user : null,
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-info').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data,
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case REQUEST_USER_DATA:
            return { 
                ...state,
                user: action.payload,
            };
        default: {
            return {...state};
        }
    }
}

export default reducer;