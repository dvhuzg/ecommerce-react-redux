import SignUp from "./presentation/components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
