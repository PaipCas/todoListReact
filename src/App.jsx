import AppUI from './components/AppUI';
import { TodoProvider } from './context/TodoContext';

export default function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}