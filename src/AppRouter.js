import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardLayout from "./layout/DashboardLayout";
import ManageCaller from './pages/ManageCaller';
import Leads from './pages/Leads';
import CreateNewLead from './pages/CreateNewLead';
import CreatePaymentLinkPage from './pages/CreatePaymentLinkPage';
import StatusManager from './pages/StatusManager';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './authPages/LoginPage';
import RegisterPage from './authPages/RegisterPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />

        <Route
          path="/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/callers" element={<ManageCaller />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/new-lead" element={<CreateNewLead />} />
                <Route path="/create-payment-link" element={<CreatePaymentLinkPage />} />
                <Route path="/status-manager" element={<StatusManager />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
