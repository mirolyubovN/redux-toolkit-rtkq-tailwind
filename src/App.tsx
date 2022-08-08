import React from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { FavPage } from './pages/FavouritesPage';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Navigation/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/fav" element={<FavPage />} />
			</Routes>
		</>
	);
}

export default App;
