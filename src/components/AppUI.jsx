import { TodoContext } from '../context/TodoContext';
import TodoCounter from './TodoCounter';
import TodoHeader from './TodoHeader';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodosLoading from './TodosLoading';
import TodoItem from './TodoItem';
import { useContext } from 'react';

export default function AppUI() {
	const { loading, error, filteredTodos, completeTodo, deleteTodo } = useContext(TodoContext);
	return (
		<>
			<div className="min-h-screen bg-gray-50 text-gray-900">
				<TodoHeader />

				<main className="max-w-2xl mx-auto px-4 sm:px-6 pb-16 pt-6 ">
					<TodoCounter />
					<TodoSearch />

					<TodoList>
						{loading && <TodosLoading count={3} />}
						{error && (<p className='text-center text-red-600 mt-4'>No se pudieron cargar las tareas</p>)}
						{(!loading && filteredTodos.length === 0) && (<p className='text-center text-gray-500 mt-4'>¡Crea tu primera tarea!</p>)}
						{filteredTodos.map((todo, index) => (
							<TodoItem key={index} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(index)} onDelete={() => deleteTodo(index)} />
						))}
					</TodoList>
				</main>
			</div>
		</>
	);
}
