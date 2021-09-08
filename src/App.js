import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import MainLayout from './layout/Main-layout';
import UserDashboard from './layout/user-dashboard/user-dashboard';
import DashboardPage from './pages/dashboard-pages/dashboard-page';
import HomePage from './pages/Home-page';
import SignInPage from './pages/sign-in-page';
import ListFlatPage from './pages/list-flat-page';
import SearchFlatPage from './pages/search-flat-page';
import { getCurrentUser } from './services/authService';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const user = getCurrentUser();
    dispatch(setCurrentUser(user));
  }, []);

  return (
    <div className="App " data-theme={themeState ? 'dark' : 'light'}>
      <ToastContainer
        position="top-right"
        autoClose="3000"
        hideProgressBar
        closeOnClick
      />
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </Route>
          <Route path="/signIn" exact>
            <MainLayout>
              <SignInPage />
            </MainLayout>
          </Route>
          <Route path="/listFlat" exact>
            <MainLayout>
              <ListFlatPage />
            </MainLayout>
          </Route>
          <Route path="/searchFlat" exact>
            <MainLayout>
              <SearchFlatPage />
            </MainLayout>
          </Route>
          <Route path="/dashboard" exact>
            <UserDashboard children={<DashboardPage />} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
