import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Home,
  Gallery,
  Register
} from './pages/index.js';

import {
  Header,
  Footer
} from './components/index.js';

function App() {

  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/register' component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;