import logo from '../assets/images/logo.webp';

function formatDate(date = new Date()) {
	const text = date.toLocaleDateString('es-ES', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function TodoHeader() {
	return (
		<header className='bg-white border-b border-gray-300 sticky top-0 z-30'>
			<div className="max-w-2xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
				<div className="flex items-center gap-2.5">
					<div className="flex items-center">
						<img src={logo} alt="Logo" className='size-7 flex-shrink-0' />
					</div>

					<span className="font-bold text-lg tracking-tight">TodosApp</span>
				</div>

				<span className="text-sm text-gray-500 font-medium">{formatDate()}</span>
			</div>
		</header>
	);
}
