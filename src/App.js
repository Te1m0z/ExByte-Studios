import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Home,
  Gallery
} from './pages/index.js';

import { Header } from './components/index.js';

export function App() {

  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/gallery' component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
}
