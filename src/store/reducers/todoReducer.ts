import {ITodoState, TodoAction, TodoActionTypes} from "../../types/todo";

const initialState: ITodoState = {
	todos: [],
	loading: true,
	error: null,
	page: 1,
	limit: 10
}

export function todoReducer(state: ITodoState = initialState, action: TodoAction): ITodoState {
	switch (action.type) {
		case TodoActionTypes.FETCH_TODO:
			return {...state, loading: true}
		case TodoActionTypes.FETCH_TODO_SUCCESS:
			return {...state, loading: false, todos: action.payload}
		case TodoActionTypes.FETCH_TODO_ERROR:
			return {...state, loading: false, error: action.payload}
		case TodoActionTypes.SET_TODO_PAGE:
			return {...state, loading: false, page: action.payload}
		default:
			return state
	}
}