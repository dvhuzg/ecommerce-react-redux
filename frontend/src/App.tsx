import SignUp from "./presentation/pages/SignUp/SignUp";
import Login from "./presentation/pages/Login/Login";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
