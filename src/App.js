import { Routes, Route } from "react-router-dom";


import Home from "./routes/Home/Home.component";
import Login from "./routes/auth/Login/Login.component";
import Register from "./routes/auth/Register/Register.component";
import TopNav from "./routes/TopNav/TopNav.component";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute.component";
import Dashboard from "./routes/Dashboard/Dashboard.component";
import DashboardSeller from "./routes/DashboardSeller/DashboardSeller.component";
import NewHotel from "./routes/hotels/NewHotel/NewHotel.component";
import StripeCallback from "./routes/stripe/StripeCallback/StripeCallback.component";
import EditHotel from "./routes/hotels/EditHotel/EditHotel.component";
import ViewHotel from "./routes/hotels/ViewHotel/ViewHotel.component";
import StripeSuccess from "./routes/stripe/StripeSuccess/StripeSuccess.component";
import StripeCancel from "./routes/stripe/StripeCancel/StripeCancel.component";


function App() {
  return (
    <Routes>
      <Route path="/" element={<TopNav />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="dashboard/seller" element={<PrivateRoute><DashboardSeller /></PrivateRoute>} />
        <Route path="hotels/new-hotel" element={<PrivateRoute><NewHotel /></PrivateRoute>} />
        <Route path="hotels/edit-hotel" element={<PrivateRoute><EditHotel /></PrivateRoute>} />
        <Route path="stripe/callback" element={<PrivateRoute><StripeCallback /></PrivateRoute>} />
        <Route path="stripe/checkout-success/:hotelId" element={<PrivateRoute><StripeSuccess /></PrivateRoute>} />
        <Route path="stripe/checkout-failure" element={<PrivateRoute><StripeCancel /></PrivateRoute>} />
        <Route path="hotel/:hotelId" element={<ViewHotel />} />
        
      </Route>
    </Routes>
  )
}

export default App;
