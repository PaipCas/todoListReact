import { Crown } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoCounter() {
	const { completedTodos, totalTodos, pending } = useContext(TodoContext);
	const percentage = (totalTodos === 0 ? 0 : completedTodos / totalTodos * 100).toFixed(0);
	const progress = 100 * (1 - (percentage / 100));

	return (
		<div className="bg-white border border-gray-300 shadow-xs rounded-2xl p-5 flex items-center gap-5">
			<div className="flex-shrink-0 size-20">
				<div className="relative size-20">
					<div className="w-full h-full min-w-0">
						<div className="relative cursor-default w-full h-full max-h-20 flex items-center justify-center">
							<svg className='size-17.5' viewBox="0 0 120 120">
								<circle cx="60" cy="60" r="40" className='fill-none stroke-primary-200 stroke-8 animate-[draw_1s_cubic-bezier(0.4,0,0.2,1)_backwards]' strokeLinecap="round" pathLength="100" strokeDasharray="100" transform="rotate(-90 60 60)" />

								<circle cx="60" cy="60" r="50" className='fill-none stroke-primary-700 stroke-8 transition-all duration-500 animate-[showStroke_1s_cubic-bezier(0.4,0,0.2,1)_0.5s_backwards]' strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={progress} transform="rotate(-90 60 60)" />
							</svg>
						</div>
					</div>

					<div className="absolute inset-0 flex items-center justify-center">
						<span className={`text-sm font-bold font-tabular leading-none ${percentage === '100' && 'text-primary-700'}`}>{percentage === '100' ? <Crown /> : `${percentage}%`}</span>
					</div>
				</div>
			</div>

			<div className="flex-1 min-w-0">
				<p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Progreso de hoy</p>

				<p className="text-2xl font-bold font-tabular leading-none mb-3">{percentage}% completado</p>

				<div className="flex items-center gap-3 flex-wrap">
					<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100">
						<span className="font-tabular text-sm font-bold">{totalTodos}</span>
						<span className="font-medium">totalTodos</span>
					</span>

					<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600">
						<span className="font-tabular text-sm font-bold">{pending}</span>
						<span className="font-medium">pendientes</span>
					</span>

					<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-600">
						<span className="font-tabular text-sm font-bold">{completedTodos}</span>
						<span className="font-medium">hechas</span>
					</span>
				</div>
			</div>
		</div>
	);
}