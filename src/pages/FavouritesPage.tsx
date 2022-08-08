import React from 'react';
import { useAppSelector } from '../hooks/redux';

export const FavPage = () => {
	const {favourites} = useAppSelector(state => state.github)

	if (favourites.length === 0) {
		return <p className='text-center'>No items</p>
	}

	return (
		<ul className='list-none text-center pt-10 mx-auto h-screen'>
			{
				favourites.map(item => (
					<li key={item} className='py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white transition-colors'>
						<a href={item} target='_blank' rel='noreferrer'>{item}</a>
					</li>
				))
			}
		</ul>
	);
};
