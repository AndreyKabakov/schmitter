import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {SchmitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    });
    const [stats, setStats] = useState({
        followers: 100,
        following: 50
    })
    const changeAvatar=url=>{
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}))
    }
    return (
        <div className={'app'}>
            <SchmitterContext value={{
                user,
                stats,
                changeAvatar
            }}>
                <Navigation/>
                <Body/>
            </SchmitterContext>
        </div>
    )
}

export default App
