import {Dispatch} from "redux";
import {TodoAction, TodoActionTypes} from "../../types/todo";
import axios from "axios";

export function fetchTodo(page: number = 1, limit: number = 10) {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
				params: {
					_page: page,
					_limit: limit
				}
			})
			dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
		} catch (e) {
			dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: "Ошибка при загрузке списка дел"})
			
		}
	}
}

export function setTodoPage(page: number): TodoAction {
	return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}