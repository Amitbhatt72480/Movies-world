import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthProvider";
import Account from './components/Account';
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteforMain from "./components/ProtectedRouteforMain";
function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<ProtectedRouteforMain><Main /></ProtectedRouteforMain>} />
        <Route path="/account" element={<Account />} />
      </Routes>
     </AuthContextProvider>
    </>
  );
}

export default App;
