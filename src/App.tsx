import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layouth from "./layout/Layouth";
import Login from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddCategory from "./pages/Admin/AddCategory";
import AddTag from "./pages/Admin/AddTag";
import AddPost from "./pages/Admin/AddPost";
import AllComponents from "./pages/Dashboard/AllComponents";
import MostUsed from "./pages/Dashboard/MostUsed";
import Categories from "./pages/Dashboard/Categories";
import About from "./pages/Dashboard/About";
import CategoriesPost from "./pages/Dashboard/CategoriesPost";
import ProtectedRoute from "./layout/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layouth />}>
            <Route index element={<Welcome />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="allcomponents" element={<AllComponents />} />
            <Route path="mostused" element={<MostUsed />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categoriesposts" element={<CategoriesPost />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<AdminDashboard />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="addtag" element={<AddTag />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
