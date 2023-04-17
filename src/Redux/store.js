import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


let store = {
    _state: { // объект с данными (состоит из веток)
        profilePage: { // объект или ветка
            postData: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Hi', likesCount: 15},
                {id: 3, message: 'how are you?', likesCount: 14},
            ],
            newPostText : 'it-kamasutra', // мб это неправильно
        },
        dialogsPage: {  // объект или ветка
            dialogsData: [ // массив данных с объектами
                {id: 1, name: 'Alexey'},
                {id: 2, name: 'Valya'},
                {id: 3, name: 'Alexey'},
                {id: 4, name: 'Valya'},
                {id: 5, name: 'Alexey'},
                {id: 6, name: 'Valya'},
            ],
            messageData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hello1'},
                {id: 3, message: 'Hello2'},
                {id: 4, message: 'Hello3'},
                {id: 5, message: 'Hello4'},
                {id: 6, message: 'Hello5'},
            ],
            newMessageBody: "",
        },
        navbarPage: {
            friendsData:
                [
                    {id: 1, name: 'Andrew'},
                    {id: 2, name: 'Sasha'},
                    {id: 3, name: 'Sveta'},
                ]
        },
    }, // приватное свойство
    _callsubscriber() { // приватный метод - заглушка
        console.log("State changed");
    },
    getState() {
        return this._state
    }, // для того, чтобы получить пост
    subscribe (observer) {
        this._callsubscriber = observer;
    }, // для того, чтобы подписаться

    dispatch(action) { // дл того, чтобы изменить стейт из внешнего мира
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callsubscriber(this._state);
    }

}

export default store;
window.store = store;
