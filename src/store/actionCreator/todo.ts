import {Dispatch} from "redux";
import axios from "axios";
import {TodoActions, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<TodoActions>) => {
    try {
        dispatch({type: TodoActionTypes.FETCH_TODOS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {_page: page, _limit: limit}
        })
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Error Users'})
    }
}
export const setPage = (page: number): TodoActions => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}

}