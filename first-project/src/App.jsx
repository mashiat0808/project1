import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";


function App() {
  return (
    <div className="App">
     <Router>
      <Link to="/"> Homepage</Link>
      <Link to="/createpost"> Create A post</Link>
      
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>

      </Routes>
     </Router>
    </div>
  );
}

export default App;