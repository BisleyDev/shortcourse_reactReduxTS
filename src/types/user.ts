export enum UserActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface IUserState {
	users: any[];
	loading: boolean;
	error: null | string
}

interface FETCH_USERS {
	type: UserActionTypes.FETCH_USERS
	payload: null
}

interface FETCH_USERS_SUCCESS {
	type: UserActionTypes.FETCH_USERS_SUCCESS
	payload: any[]
}

interface FETCH_USERS_ERROR {
	type: UserActionTypes.FETCH_USERS_ERROR
	payload: string
}

export type UserActions = FETCH_USERS | FETCH_USERS_SUCCESS | FETCH_USERS_ERROR