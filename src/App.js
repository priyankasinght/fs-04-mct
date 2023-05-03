import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"
import CreateAccount from "./components/SignUp"
import Moviedetail from "./components/Moviedetail";
function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/CreateAccount" element={<CreateAccount />}></Route>
        <Route path="/Moviedetail/:id" element={<Moviedetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
