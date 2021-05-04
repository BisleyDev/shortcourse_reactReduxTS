import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const UserList: React.FC = () => {
	const {users, error, loading} = useTypedSelector(state => state.user)
	const {fetchUsers} = useActions()
	
	useEffect(()=> {
		fetchUsers()
	}, [])
	if(loading) return <div>Идет загрузка...</div>
	if(error) return <div>{error}</div>
	return (
		<ul>
			{
				users.map(user => {
					return <li key={user.id}>{user.name}</li>
				})
			}
		</ul>
	)
}
