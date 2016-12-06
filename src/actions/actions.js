// Action Types
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_FILTER = 'SET_FILTER'

export const Filters = {
	SHOW_ALL: 'SHOW_ALL'
	SHOW_DONE: 'SHOW_DONE'
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// Action Creators

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id
	}
}

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}