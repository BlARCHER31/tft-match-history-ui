import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar'
import SummonerStats from './components/summonerStats'
import Champions from './components/champions'
import Home from './components/home'
import NotFound from './components/notFound'

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route path='/not-found' component={NotFound} />
          <Route path='/summoner-stats' component={SummonerStats} />
          <Route path='/champions' component={Champions} />
          <Route path='/home' exact component={Home} />
          <Redirect from='/' exact to='/home' />
          <Redirect to='/not-found' />
        </Switch>
      </div>
    </div>
  )
}

export default App
