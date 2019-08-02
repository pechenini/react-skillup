import { ADD_POSTS, ADD_POST, DELETE_POST } from "../../actions/posts/postActionTypes";

const initialState = [];

function postReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_POST:
            return [ ...state, payload ];
        case ADD_POSTS:
            return [ ...payload ];
        case DELETE_POST:
            return state.filter((post,index) => index !== payload);
        default:
            return state;
    }
}

export default postReducer;