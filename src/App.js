import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/HeaderFooter/Footer';
import Header from './components/HeaderFooter/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'  >
              <Redirect to='/home' />
            </Route>

            <Route exact path='/home' />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' />

            {/* <PrivateRoute exact path='/all-doctor'>



            </PrivateRoute>

            <PrivateRoute exact path='/doctor/:id'>



            </PrivateRoute> */}

            <Route path='/*' component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
