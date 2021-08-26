import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Home,
  Gallery,
  Register,
  Login
} from './pages/index.js';

import {
  Header,
  Footer
} from './components/index.js';

function App() {

  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;