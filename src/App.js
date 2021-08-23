import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Home,
  Gallery
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
          <Route path='/gallery' component={Gallery} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;