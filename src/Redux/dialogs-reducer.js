const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'; // ACTION

let initialState = {
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
}

const dialogsReducer = (state= initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 7, message: body})
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({ // update body of new message
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
})

export default dialogsReducer;