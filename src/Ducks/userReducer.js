import axios from 'axios';

const initialState = {
 user: [],
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'
// const UPDATE_USER = 'UPDATE_USER'

export const requestUserData = () => {
    let data = axios.get('/auth/user-info/:id').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data,
    }
}

// export const updateUser = (user) => {
//     let data = axios.post('/auth/user-info/:id', { user }).then(res => res.data);
//     return {
//         type: UPDATE_USER,
//         payload: data,
//     }
// }

function reducer(state = initialState, action){
    switch(action.type){
    //     case `UPDATE_USER`: {
    //         return {
    //             ...state,
                
    //         }
        // }
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