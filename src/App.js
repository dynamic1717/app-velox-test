import React from 'react'
import './styles/app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Appbar } from './components/Appbar'
import { Sidebar } from './components/Sidebar'
import { AppointmentsPage } from './pages/AppointmentsPage'
import { ProfilePage } from './pages/ProfilePage'

const App = () => {
  return (
    <Router>
      <Appbar />
      <Sidebar />

      <Switch>
        <Route exact path='/'>
          <ProfilePage />
        </Route>
        <Route exact path='/appointments'>
          <AppointmentsPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
