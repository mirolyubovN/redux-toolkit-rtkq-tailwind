import React, { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

export const RepoCard = ({repo} : {repo : IRepo}) => {

	const {addFavourite, removeFavourite} = useActions()
	const {favourites} = useAppSelector(state => state.github)
	const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		addFavourite(repo.html_url)
		setIsFavourite(true)
	}
	const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		removeFavourite(repo.html_url)
		setIsFavourite(false)
	}
	const [isFavourite, setIsFavourite] = useState(favourites.includes(repo.html_url))

	return (
		<div className='border px-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
			<a href={repo.html_url} target='_blank' rel="noreferrer" >
				<h2 className='text-lg font-bold'>{repo.full_name}</h2>
				<p className='text-sm'>
					Forks: <span className='font-bold mr-2'>{repo.forks_count}</span>
					Watchers: <span className='font-bold'>{repo.watchers_count}</span><br/>
					Url: {repo.html_url}
					{repo?.description}
				</p>

				{isFavourite ? (
					<button
						className='py-2 px-4 mt-2 mb-2 bg-red-400 rounded hover:shadow-md transition-all'
						onClick={removeFromFavourite}
					>
						Remove
					</button>
					)
					: (
					<button
						className='py-2 px-4 mt-2 mb-2 bg-yellow-400 rounded hover:shadow-md transition-all'
						onClick={addToFavourite}
					>
						Add
					</button>
					)
				}

			</a>
		</div>
	)
}
