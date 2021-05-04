import * as userActions from "./user";
import * as todoActions from "./todos";


export const actionCreators = {
	...todoActions,
	...userActions
}