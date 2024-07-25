import { useState } from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Home from './components/content/home/Home';
import Explore from './components/content/explore/Explore';
import Artist from './components/content/artist/Artist';
import Profile from './components/content/profile/Profile';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
let login = true;
export default function App() {
  const [tab, setTab] = useState('home');
  return (
    <>
      <Navbar setTab={setTab} tab={tab} login={login}/>
      {
        tab == 'home' && <Home />
      }
      {
        tab == 'explore' && <Explore />
      }
      {
        tab == 'artist' && <Artist />
      }
      {
        tab == 'profile' && <Profile />
      }

      {
        (tab=='login' && !login) && <Login setTab={setTab}/>
      }

      {
        (tab=='signup' && !login) && <Signup setTab={setTab}/>
      }
    </>
  )
}