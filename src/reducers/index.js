import { Filters } from '../actions'

const initialState = {
	filter: Filters.SHOW_ALL,
	todos: []
}

function todoApp(state = initialState, action) {
	switch(action.type) {
		case SET_FILTER:
			return ...state, {
				filter: action.filter
			}
		default:
			return state
	}
}