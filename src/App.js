import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';
import ProtectedRoute from "./helpers/protected-route";

const HomePage = lazy(() => import("./pages/homepage"));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense
          fallback={
            <div className="h-screen flex bg-blue-100 justify-center items-center">
              <div className="animate-pulse  border rounded-full transition duration-100">
                <p className="text-lg md:text-5xl font-bold p-4 ">
                  Loading....
                </p>
              </div>
            </div>
          }
        >
          <Switch>
            <Route exact path={ROUTES.HOMEPAGE} component={HomePage} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
