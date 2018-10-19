const initialState = {
  email: "",
  username: "",
  password: "",
  games: [],
  search: ""
};

const SEARCH_STRING = "SEARCH_STRING";
// const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case UPDATE_USER:
    //   return Object.assign({}, state, {
    //     email: action.payload,
    //     username: action.payload,
    //     password: action.payload
    //   });
    default:
      return state;
  }
}

// export function updateUser(data) {
//   return {
//     type: UPDATE_USER,
//     payload: {
//       email,
//       username,
//       password
//     }
//   };
// }

export function search(search) {
  return {
    type: SEARCH_STRING,
    payload: search
  };
}
