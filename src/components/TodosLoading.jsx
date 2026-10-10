function TodoItemSkeleton() {
	return (
		<div className="h-13.25 bg-gray-100 rounded-lg py-3 px-1 flex items-center gap-3">
			<div className="size-6 rounded-full border-2 border-gray-300"></div>
			<div className="h-5.5 rounded-lg bg-gray-200/60 flex-1"></div>
			<div className="size-7"></div>
		</div>
	);
}

export default function TodosLoading({ count = 2 }) {
	return (
		<div className='animate-pulse flex flex-col gap-1 divide-y divide-gray-300'>
			{Array.from({ length: count }, (_, i) => (
				<TodoItemSkeleton key={i} />
			))}
		</div>
	);
}
