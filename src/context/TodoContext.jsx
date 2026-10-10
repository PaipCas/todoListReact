import { createContext, useState } from 'react';

import useLocalStorage from '../hooks/useLocaleStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
	const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('todos', []);
	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;
	const pending = totalTodos - completedTodos;

	const [searchValue, setSearchValue] = useState('');
	const searchedTodos = todos.filter(todo => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();

		return todoText.includes(searchText);
	});
	const [filterValue, setFilterValue] = useState('');
	const filteredTodos = searchedTodos.filter(todo => {
		if (filterValue === 'pending') return !todo.completed;
		if (filterValue === 'completed') return todo.completed;
		return true;
	});

	const addTodo = text => {
		const newTodos = [...todos];
		newTodos.push({
			text,
			completed: false
		});
		saveTodos(newTodos);
	};
	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		saveTodos(newTodos);
	};
	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		saveTodos(newTodos);
	};
	const deleteCompleted = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		saveTodos(newTodos);
	};

	return <TodoContext.Provider value={{
		loading, error, filteredTodos, completeTodo, deleteTodo, completedTodos, totalTodos, pending, filterValue, setFilterValue, setSearchValue, deleteCompleted, addTodo
	}}>
		{children}
	</TodoContext.Provider>;
}

export { TodoContext, TodoProvider };