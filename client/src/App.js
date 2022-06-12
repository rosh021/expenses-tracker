import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Register } from "./pages/register-login/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/register-login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
