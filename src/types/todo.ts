export enum TodoActionTypes {
	FETCH_TODO = 'FETCH_TODO',
	FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
	FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE'
}

export interface ITodoState {
	todos: any[];
	loading: boolean;
	error: null | string;
	limit: number;
	page: number;
}

interface FETCH_TODO {
	type: TodoActionTypes.FETCH_TODO
}
interface FETCH_TODO_SUCCESS {
	type: TodoActionTypes.FETCH_TODO_SUCCESS
	payload: any[]
}
interface FETCH_TODO_ERROR {
	type: TodoActionTypes.FETCH_TODO_ERROR
	payload: string
}
interface SET_TODO_PAGE {
	type: TodoActionTypes.SET_TODO_PAGE
	payload: number
}

export type TodoAction = FETCH_TODO | FETCH_TODO_SUCCESS | FETCH_TODO_ERROR | SET_TODO_PAGE