import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route (no layout) */}
        <Route
          path="/Login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        {/* Protected / main app routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />

        <Route
          path="/Dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
