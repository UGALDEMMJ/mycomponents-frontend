import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Layouth from "./layout/Layouth";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AddCategory from "./pages/AddCategory";
import AddTag from "./pages/AddTag";
import AddPost from "./pages/AddPost";
import AllComponents from "./pages/AllComponents";
import MostUsed from "./pages/MostUsed";
import Categories from "./pages/Categories";
import About from "./pages/About";
import ProtectedRoute from "./layout/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Welcome />} />
            <Route element={<Layouth />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="allcomponents" element={<AllComponents />} />
              <Route path="mostused" element={<MostUsed />} />
              <Route path="categories" element={<Categories />} />
              <Route path="about" element={<About />} />
            </Route>
              <Route path="/login" element={<Login />}/>
              {/* SignIn */}
          </Route>

          <Route path="/admin" element={<ProtectedRoute/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path="addpost" element={<AddPost/>}/>
            <Route path="addcategory" element={<AddCategory/>}/>
            <Route path="addtag" element={<AddTag/>}/>
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
