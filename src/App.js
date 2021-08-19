import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
  
        <div className="App">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/login" component = {Login} />
                <Route path="/detail/:id" component = {Detail}/>
                <Route path="/" component = {Home} exact />
            </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
