import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => { // перерисуй весь сайт
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                    <App
                        state={state}
                        dispatch={store.dispatch.bind(store)} // байндим - почитать
                        store={store}
                    />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
}); // callback