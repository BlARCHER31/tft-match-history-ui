import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar'
import SummonerStats from './components/summonerStats'
import Home from './components/home';

function App() {
  return (
    <div>
      <NavBar />
      <div className='content'>
        <Switch>
          <Route path='/summoner/stats' component={SummonerStats}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
