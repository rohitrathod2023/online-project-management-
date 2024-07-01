import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/login";
import Home from "./pages/home";
import CreateProject from "./pages/create-page";
import { Routes, Route } from "react-router-dom";
import List from "./pages/list-page";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateProject />} />
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
