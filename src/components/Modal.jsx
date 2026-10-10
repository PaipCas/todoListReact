import { createPortal } from 'react-dom';

export default function Modal({ children }) {
	return createPortal(
		<div className='fixed bg-black/50 z-40 inset-0 flex items-center justify-center p-2'>
			<div className="bg-white p-6 sm:p-8 rounded-2xl max-w-xl w-full">
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
}
