import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route exact path="/equipment/:equipmentName" element={<Details />} />
		</Routes>
	);
}

export default App;
