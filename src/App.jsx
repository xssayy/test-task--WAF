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

function App() {
  return (
    <>
      <Header />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
