import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import OrdersHistory from "./pages/OrdersHistory";
import OtherProducts from "./pages/OtherProducts";
import SelectedProduct from "./pages/SelectedProduct";
import UserAccountInfo from "./pages/UserAccountInfo";
import UserProfile from "./pages/UserProfile";
import UserSignUp from "./pages/UserSignUp/UserSignUp.tsx";
import UserSignUpPage2 from "./pages/UserSignUp/UserSignUpPage2.tsx";
import Login from "./pages/Login";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<OtherProducts />} />
        <Route path="/products/:id" element={<SelectedProduct />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/sign-up" element={<UserSignUp />} />
        <Route path="/users/sign-up/complete" element={<UserSignUpPage2 />} />
        <Route path="/my-profile/dashboard" element={<UserProfile />} />
        <Route path="/my-profile/orders" element={<OrdersHistory />} />
        <Route path="/my-profile/info" element={<UserAccountInfo />} />

        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
