import { Check, Trash } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoItem({ text, completed, index, onComplete, onDelete }) {
	return (
		<li className={`group flex items-center gap-3 py-3 px-1 hover:bg-gray-100 rounded-lg transition-all duration-200 animate-[taskSlideIn_0.25s_ease_backwards] ${completed && 'completed'}`} style={{ animationDelay: `${index * 30}ms` }}>
			<button type="button" className="flex-shrink-0 size-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 border-gray-300 bg-transparent cursor-pointer hover:border-primary-700 group-[.completed]:bg-primary-700 group-[.completed]:border-primary-700 active:animate-[checkBounce_0.3s_cubic-bezier(0.34,1.56,0.64,1)_backwards]" onClick={onComplete}>
				<Check className='size-3 stroke-3 text-transparent group-[.completed]:text-white transition-all duration-200' />
			</button>

			<span className="flex-1 min-w-0 text-sm font-medium leading-relaxed transition-all duration-200 group-[.completed]:line-through group-[.completed]:text-gray-500">{text}</span>

			<button type="button" className="flex-shrink-0 size-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-500 transition-all duration-150 cursor-pointer" onClick={onDelete}>
				<Trash className='size-3.5' />
			</button>
		</li>
	);
}
