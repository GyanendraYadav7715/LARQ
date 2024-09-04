 import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./pages/Home"
import Technology from "./pages/technology";
import Swipe from "./pages/CanvasAnimation"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/swipe" element={<Swipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
