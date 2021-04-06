import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'


import MainLayout from "./layout/Main-layout";
import UserDashboard from './layout/user-dashboard/user-dashboard';
import DashboardPage from "./pages/dashboard-pages/dashboard-page"
import HomePage from "./pages/Home-page";
import SignInPage from "./pages/sign-in-page"
import ListFlatPage from "./pages/list-flat-page";
import SearchFlatPage from './pages/search-flat-page'
import Logout from './components/logout'
import {getCurrentUser} from './services/authService'
import "./App.css";
import 'react-toastify/dist/ReactToastify.css'

class App extends React.Component {
 
  state = {

  }

  componentDidMount() {
   const user = getCurrentUser()
   this.setState({user})
  }
   render() { 
     const {user } = this.state 
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
              <MainLayout user={user}  >
                <HomePage />
              </MainLayout>
            </Route>
            <Route path="/logout" component={Logout}/>
            <Route path="/signIn" exact>
              <MainLayout user={user}>
                <SignInPage />
              </MainLayout>
            </Route>
            <Route path="/listFlat" exact>
              <MainLayout user={user}>
                <ListFlatPage/>
              </MainLayout>
            </Route>
            <Route path="/searchFlat" exact>
              <MainLayout user={user}>
                <SearchFlatPage/>
              </MainLayout>
            </Route>
            <Route path="/dashboard" exact>
              <UserDashboard children={<DashboardPage/>} user={user} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
