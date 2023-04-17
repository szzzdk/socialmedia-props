import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from "./Components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
            <div className="App">
                <Header/>
                <Navbar state={props.state.navbarPage}/>
                <div className='App-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile store={props.store} />}
                        />
                        <Route path='/dialogs/*'
                               element={<DialogsContainer store={props.store} />}
                        />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
