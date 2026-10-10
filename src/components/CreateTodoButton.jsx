import { Plus } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function CreateTodoButton() {
	const { openModal, setOpenModal } = useContext(TodoContext);

	return (
		<>
			<button type="button" className={`size-10 cursor-pointer bg-primary-700 hover:bg-primary-800 transition-all rounded-full text-white flex items-center justify-center fixed bottom-4 right-4 z-50 ${openModal && 'rotate-45'}`} onClick={() => setOpenModal(state => !state)}>
				<Plus className='size-6' />
			</button>
		</>
	);
}
