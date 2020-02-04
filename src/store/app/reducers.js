import { INIT_START, INIT_FAILURE, INIT_SUCCESS } from './types'

const initialState = {
  error: "",
  world: {},
  // rooms: {},
  isLoading: false,
  isSuccess: false,
}

export const start (state = initialState, action) => {
const { type, payload } = action;
switch(type) {
  case INIT_START:
    return {
      ...state,
      error: "",
      isLoading:true
    }
  case INIT_SUCCESS:
    console.log('THIS IS THE PAYLOAD FOR INIT::::', payload)
    return {
      ...state,
      error: "",
      isLoading: false,
      // check payload
      player: payload,
      // room: payload.room
    };
  case INIT_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: payload
    }
  
    default:
      return state;
}
}