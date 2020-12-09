import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <div>
     {/* <Login/>
     <Signup/> */}

     <Router>

        <Switch>
            <Route  exact path='/' component={Login}/>
            <Route  exact path='/signup' component={Signup}/>
            <Route  exact path='/home' component={Home}/>

        </Switch>
     </Router>
    </div>
  );
}

export default App;
