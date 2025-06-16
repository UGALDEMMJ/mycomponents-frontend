import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Layouth from "./layout/Layouth";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
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
              {/* Paginas Acceso libre de los componentes */}
            </Route>
              <Route path="/login" element={<Login />}/>
              {/* SignIn */}
          </Route>

          <Route path="/admin" element={<ProtectedRoute/>}>
            <Route index element={<AdminDashboard/>}/>
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
