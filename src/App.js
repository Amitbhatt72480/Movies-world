import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthProvider";
import Account from './components/Account';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/account" element={<Account />} />
      </Routes>
     </AuthContextProvider>
    </>
  );
}

export default App;
