import { Trash } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoList({ children }) {
	const { completedTodos, totalTodos, pending, filterValue, setFilterValue, deleteCompleted } = useContext(TodoContext);

	const filters = [
		{ value: '', label: 'Todas', count: totalTodos },
		{ value: 'pending', label: 'Pendientes', count: pending },
		{ value: 'completed', label: 'Hechas', count: completedTodos },
	];

	return (
		<>
			<div className="mt-4">
				<div className="flex items-center justify-between border-b border-gray-300">
					<div className="flex items-center gap-0">
						{filters.map(filter => (
							<button key={filter.value} type="button" className={`group relative px-4 py-2.5 text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 text-gray-500 cursor-pointer hover:text-gray-900 [.active]:text-primary-700 border-b-2 border-transparent [.active]:border-primary-700 ${filterValue === filter.value ? 'active' : ''}`} onClick={() => setFilterValue(filter.value)}>
								{filter.label}

								<span className="text-xs font-bold px-1.5 py-0.5 rounded-full font-tabular bg-gray-100 text-gray-500 group-[.active]:bg-primary-100 group-[.active]:text-primary-700">{filter.count}</span>
							</button>
						))}
					</div>

					<button type="button" className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-500 transition-colors duration-150 px-2 py-1 rounded-lg cursor-pointer hover:bg-red-50" onClick={deleteCompleted}>
						<Trash className='size-3.25' />

						<span className="hidden sm:inline">Limpiar hechas</span>
					</button>
				</div>
			</div>

			<div className="mt-3">
				<ul className="flex flex-col gap-0 divide-y divide-gray-300">
					{children}
				</ul>
			</div>
		</>
	);
}
