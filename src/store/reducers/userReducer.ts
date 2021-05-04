import {UserActionTypes, IUserState, UserActions} from "../../types/user";

const initialState = {
	users: [],
	loading: true,
	error: null
}

export const userReducer = (state: IUserState = initialState, action: UserActions): IUserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USERS:
			return {loading: true, error: null, users: []}
		case UserActionTypes.FETCH_USERS_SUCCESS:
			return {loading: false, error: null, users: action.payload}
		case UserActionTypes.FETCH_USERS_ERROR:
			return {loading: false, error: action.payload, users: []}
		default:
			return state
	}
}

