const initialState = {
  games: [],
  search: ""
};

const SEARCH_STRING = "SEARCH_STRING";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function search(search) {
  return {
    type: SEARCH_STRING,
    payload: search
  };
}
