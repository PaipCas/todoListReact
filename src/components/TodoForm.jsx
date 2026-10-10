import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoForm() {
	const { addTodo, setOpenModal } = useContext(TodoContext);
	const [newTodoValue, setNewTodoValue] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};
	const onCancel = () => {
		setOpenModal(false);
	};
	const onChange = e => {
		setNewTodoValue(e.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="flex flex-col gap-2">
				<label htmlFor="newTodo" className='text-sm font-semibold'>Escribe tu nuevo TODO <span className='text-red-500 relative -top-2'>•</span></label>

				<textarea name='newTodo' id='newTodo' placeholder='Cortar cebolla para el almuerzo' className='border border-gray-300 py-2 px-4 rounded-xl resize-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 outline-none transition-all' rows={4} value={newTodoValue} onChange={onChange}></textarea>

				<div className="flex items-center gap-2 mt-2">
					<button type="button" className='flex-1 py-2 px-4 bg-transparent border border-gray-300 rounded-xl font-semibold hover:bg-gray-200 transition-colors' onClick={onCancel}>Cancelar</button>
					<button type="submit" className='flex-1 py-2 px-4 bg-primary-700 text-white rounded-xl font-semibold hover:bg-primary-800 transition-colors'>Añadir</button>
				</div>
			</div>
		</form>
	);
}
