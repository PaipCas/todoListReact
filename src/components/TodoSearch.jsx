import { Plus, Search } from 'lucide-react';
import { TodoContext } from '../context/TodoContext';
import { useContext, useRef, useState } from 'react';

export default function TodoSearch() {
	const { searchValue, setSearchValue, addTodo } = useContext(TodoContext);
	const [newTodoValue, setNewTodoValue] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		addTodo(newTodoValue);
		setNewTodoValue('');
	};
	const onChange = e => {
		setNewTodoValue(e.target.value);
	};
	return (
		<>
			<div className="mt-6">
				<form onSubmit={onSubmit}>
					<div className="flex gap-2 items-start">
						<div className="flex-1 min-w-0">
							<div className="relative">
								<input type="text" name="taskText" id="taskText" className="w-full h-11 px-4 rounded-xl border text-sm font-medium bg-white placeholder:text-gray-500 transition-all duration-150 focus:ring-primary-200 focus:ring-2 focus:border-primary-700 outline-none border-gray-300" placeholder='Agrega una tarea para hoy' value={newTodoValue} onChange={onChange} />
							</div>
						</div>

						<button type="submit" className="bg-primary-700 text-white transition-all h-11 px-4 rounded-xl flex items-center gap-1.5 text-sm font-semibold flex-shrink-0 cursor-pointer hover:bg-primary-800 hover:-translate-y-px hover:shadow-lg hover:shadow-primary-700/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none" disabled={!newTodoValue.trim()}>
							<Plus className='size-4 stroke-[2.5]' />
							<span className="hidden sm:inline">Agregar</span>
						</button>
					</div>
				</form>
			</div>

			<div className="mt-4">
				<div className="relative flex items-center">
					<Search className='size-4 absolute left-3 text-gray-500 pointer-events-none' />

					<input type="text" name="taskSearch" id="taskSearch" className="w-full pl-9 pr-9 py-2.5 text-sm bg-white border border-gray-300 rounded-xl placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-primary-200  focus:border-primary-700 transition-all duration-150" placeholder='Buscar tareas' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
				</div>
			</div>
		</>
	);
};