import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./comp/design/header";
import Aside from "./comp/design/aside";
import Home from "./comp/design/home";
import Products from "./comp/design/products";
import Product from "./comp/design/product-description";
import Footer from "./comp/design/footer";
import UserProfile from "./comp/profile/user-profile";
import AdminLogin from "./comp/profile/admin-login";
import AdminManagement from "./comp/profile/admin-management";
import AdminProduct from "./comp/profile/admin-product";
import AdminProductNew from "./comp/profile/admin-product-new";
import AdminUtility from "./comp/profile/admin-utility";
import UtilityEditCategory from "./comp/profile/UtilityEditCategory";
import UtilityEditSubCategory from "./comp/profile/UtilityEditSubCategory";
import UtilityEditColor from "./comp/profile/UtilityEditColor";
import UtilityEditMaterial from "./comp/profile/UtilityEditMaterial";
import Checkout from "./comp/shopping/checkout";
import PageNotFound from "./comp/404";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Aside />
                <Home />
                <Footer />
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div>
                <Header />
                <Aside />
                <Products />
                <Footer />
              </div>
            }
          />
          <Route
            path="/product-description"
            element={
              <div>
                <Header />
                <Aside />
                <Product />
                <Footer />
              </div>
            }
          />
          <Route
            path="/user-profile"
            element={
              <div>
                <Header />
                <Aside />
                <UserProfile />
                <Footer />
              </div>
            }
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-management" element={<AdminManagement />} />
          <Route path="/admin-product" element={<AdminProduct />} />
          <Route path="/admin-product-new" element={<AdminProductNew />} />
          <Route path="/admin-utility" element={<AdminUtility />} />
          <Route
            path="/UtilityEditCategory"
            element={<UtilityEditCategory />}
          />
          <Route
            path="/UtilityEditSubCategory"
            element={<UtilityEditSubCategory />}
          />
          <Route path="/UtilityEditColor" element={<UtilityEditColor />} />
          <Route
            path="/UtilityEditMaterial"
            element={<UtilityEditMaterial />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
