import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList = () => {
	const {todos, page, limit, error, loading} = useTypedSelector(state => state.todo)
	const {fetchTodo, setTodoPage} = useActions()
	const pages = [1, 2, 3, 4, 5]
	
	useEffect(() => {
		fetchTodo(page, limit)
	}, [page])
	
	if (loading) return <div>Идет загрузка...</div>
	if (error) return <div>{error}</div>
	return (
		<div>
			<ul>
				{
					todos.map(todo => {
						return <li key={todo.id}>{`${todo.id} - ${todo.title}`}</li>
					})
				}
			</ul>
			<div>
				{pages.map(p =>
					<span key={p} onClick={() => setTodoPage(p)}
							style={{border: p === page ? '3px solid green' : '1px solid grey', padding: 10, boxSizing: 'border-box'}}
					>{p}</span>
				)}
			</div>
		</div>
	);
};

export default TodoList;