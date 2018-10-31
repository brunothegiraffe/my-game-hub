const initialState = {
  user: {},
  game: {}
};

const UPDATE_USER = "UPDATE_USER";
const ADD_GAME = "ADD_GAME";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, { user: action.payload });
    case ADD_GAME:
      return Object.assign({}, state, { game: action.payload });
    default:
      return state;
  }
}

export function updateUser(data) {
  return {
    type: UPDATE_USER,
    payload: data
  };
}
export function addGame(data) {
  return {
    type: ADD_GAME,
    payload: data
  };
}
