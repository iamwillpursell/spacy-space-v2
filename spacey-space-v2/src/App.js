import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Register } from './components/Register'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'

import './App.css';
import { AuthProvider } from './contexts/Auth';

function App() {
  return (
    <div className="App stars">
      <div className="twinkling">
        <div className="flex h-screen">
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
