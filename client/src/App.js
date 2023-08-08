import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages"
import Home from "./pages/Home";
import { Services } from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
