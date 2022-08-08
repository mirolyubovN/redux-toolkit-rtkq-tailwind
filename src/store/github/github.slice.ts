import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const LS_FAV_KEY = 'rfk';

interface GithubState {
	favourites: string[]
}

const initialState: GithubState = {
	favourites: localStorage.getItem(LS_FAV_KEY) ? JSON.parse(localStorage.getItem(LS_FAV_KEY) as string) : []
}

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<string>) {
			state.favourites.push(action.payload)
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))

		},
		removeFavourite(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(f => f !== action.payload)
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
		}
	}
})

export const githubAction = githubSlice.actions
export const githubReducer = githubSlice.reducer