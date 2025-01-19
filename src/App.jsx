import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import GuestHeader from "./components/GuestHeader/GuestHeader";
import Home from "./pages/Home/Home";
import Companies from "./pages/Companies/Companies";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Appointments from "./pages/Appointments/Appointments";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Registration from "./pages/Registration/Registration";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import RefreshLoader from "./components/RefreshLoader/RefreshLoader";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshering = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshering ? (
    <RefreshLoader />
  ) : (
    <>
      {isLoggedIn ? <Header /> : <GuestHeader />}
      <SharedLayout>
        <Routes>
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<Registration />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />
          <Route
            path="/companies"
            element={
              <PrivateRoute
                redirectTo="/registration"
                component={<Companies />}
              />
            }
          />
          <Route
            path="/appointments"
            element={
              <PrivateRoute
                redirectTo="/registration"
                component={<Appointments />}
              />
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute
                redirectTo="/registration"
                component={<Account />}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
