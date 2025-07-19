import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardLayout from "./layout/DashboardLayout";
import ManageCaller from './pages/ManageCaller';
import ManageAdmin from './pages/ManageAdmin';
import Leads from './pages/Leads';
import CreateNewLead from './pages/CreateNewLead';
import CreatePaymentLinkPage from './pages/CreatePaymentLinkPage';
import StatusManager from './pages/StatusManager';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './authPages/LoginPage';
import RegisterPage from './authPages/RegisterPage';
import ModalsMount from './ModalsMount';
// import AdminProtection from './protection/adminProtection';

const AppRouter = () => {
  return (
    <Router>
      <ModalsMount/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin Protected Routes */}
        <Route
          path="/*"
          element={
            // <AdminProtection>
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/manage-callers" element={<ManageCaller />} />
                  <Route path="/manage-admins" element={<ManageAdmin />} />
                  <Route path="/leads" element={<Leads />} />
                  <Route path="/new-lead" element={<CreateNewLead />} />
                  <Route path="/create-payment-link" element={<CreatePaymentLinkPage />} />
                  <Route path="/status-manager" element={<StatusManager />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </DashboardLayout>
            // </AdminProtection>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
