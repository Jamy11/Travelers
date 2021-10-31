import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/HeaderFooter/Footer';
import Header from './components/HeaderFooter/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';
import Home from './pages/Home';
import BookNow from './pages/BookNow';
import MyOrders from './pages/MyOrders';
import AllOrderPage from './pages/AllOrderPage';

function App() {
  // console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' >
              <Redirect to='/home' />
            </Route>

            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' />

            <PrivateRoute exact path='/book-now'>

              <BookNow />

            </PrivateRoute>

            <PrivateRoute exact path='/my-orders'>
              <MyOrders />
            </PrivateRoute>

            <PrivateRoute exact path='/manage-all-orders'>
              <AllOrderPage />
            </PrivateRoute>

            <PrivateRoute exact path='/add'>
              <AllOrderPage />
            </PrivateRoute>

            <Route path='/*' component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
