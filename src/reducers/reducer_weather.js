import {FETCH_WEATHER} from '../actions/index';

export default function(state= [], action){
	switch(action.type){
		case FETCH_WEATHER:
		{
			console.log(action.payload);
			return [action.payload.data, ...state];  //ES6 syntax - same as state.concat([action.payload.data]);
		}
	}
	return state;
} 