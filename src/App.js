import { Routes, Route } from "react-router-dom";


import Home from "./routes/Home/Home.component";
import Login from "./routes/auth/Login/Login.component";
import Register from "./routes/auth/Register/Register.component";
import TopNav from "./routes/TopNav/TopNav.component";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute.component";
import Dashboard from "./routes/Dashboard/Dashboard.component";


function App() {
  return (
    <Routes>
      <Route path="/" element={<TopNav />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Route>
    </Routes>
  )
}

export default App;
