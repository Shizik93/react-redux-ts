import {UserActions, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionTypes.FETCH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error Users'})
    }
}