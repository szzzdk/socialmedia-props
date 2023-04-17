const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { // объект или ветка
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Hi', likesCount: 15},
        {id: 3, message: 'how are you?', likesCount: 14},
    ],
    newPostText : 'it-kamasutra', // мб это неправильно
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: // { type: 'ADD-POST' }
            let newPost = { // переменная внутри метода
                id: 4,
                message: state.newPostText,
                likesCount: 10,
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export default profileReducer;