import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AddBooks/>} />
          <Route exact path="/search" element={<SearchBooks/>} />

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
