import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import { connect } from 'react-redux'
import MainLayout from "./layout/Main-layout";
import UserDashboard from './layout/user-dashboard/user-dashboard';
import DashboardPage from "./pages/dashboard-pages/dashboard-page"
import HomePage from "./pages/Home-page";
import SignInPage from "./pages/sign-in-page"
import ListFlatPage from "./pages/list-flat-page";
import SearchFlatPage from './pages/search-flat-page'
import Logout from './components/logout'
import {getCurrentUser} from './services/authService'
import {setCurrentUser} from './redux/user/user.actions'
import "./App.css";
import 'react-toastify/dist/ReactToastify.css'

class App extends React.Component {

  componentDidMount() {
   const user = getCurrentUser()
   this.props.setCurrentUser({user})
  }
   render() { 
    //  const {user } = this.state 
    return (
      <div className="App ">
         <ToastContainer
              position="top-right"
              autoClose="3000"
              hideProgressBar
              closeOnClick
            />
        <Router >
          <Switch>
            <Route path="/" exact>
              <MainLayout >
                <HomePage />
              </MainLayout>
            </Route>
            <Route path="/logout" component={Logout}/>
            <Route path="/signIn" exact>
              <MainLayout >
                <SignInPage />
              </MainLayout>
            </Route>
            <Route path="/listFlat" exact>
              <MainLayout >
                <ListFlatPage/>
              </MainLayout>
            </Route>
            <Route path="/searchFlat" exact>
              <MainLayout>
                <SearchFlatPage/>
              </MainLayout>
            </Route>
            <Route path="/dashboard" exact>
              <UserDashboard children={<DashboardPage/>}  />
            </Route>
          </Switch>
        </Router>
      </div> 
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
