import {useState} from 'react'
import './App.css'
import {ShmitterContext} from "./utils/context.ts";
import Body from "./components/Body.tsx";
import Navigation from "./components/Navigation.tsx";
import type {Stats, StatsType, User} from "./utils/types";


function App() {
  const [user, setUser] = useState<User>({
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    name: 'Monster'
  })

  const [stats, setStats] = useState<Stats>({
    followers: 0,
    following: 0
  })

  const changeAvatar = (url: string | null) => {
    setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
  }
  const changeName=(name: string|null) => {
      setUser(prevState=>({...prevState, name: name || prevState.name}));
  }
const changeStats = (statsType: StatsType, sum: number) => {
      setStats(stats =>{
          let res= stats[statsType]+sum;
          res= res < 0 ? 0:res;
          return{...stats, [statsType]:res}
      })
}
  return (
      <div className={'app'}>
        <ShmitterContext  value={{
          user, stats, changeAvatar, changeStats, changeName
        }}>
          <Navigation/>
          <Body/>
        </ShmitterContext>
      </div>
  )
}

export default App
