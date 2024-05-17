import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import "./sass/style.scss";
import Navbar from "./components/navbar/Navbar";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import Admin from "./pages/admin/Admin";
import CreateUser from "./pages/admin/create-user/CreateUser";
import ManageUser from "./pages/admin/manage-user/ManageUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./pages/users/Users";
import Wishlist from "./pages/wishlist/Wishlist";
function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="manage-user" element={<ManageUser />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
