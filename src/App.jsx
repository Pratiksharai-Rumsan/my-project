import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Service from "./components/User";
import About from "./components/About";
import User from "./components/User";

function App() {
  return (
    <>
      <Router>
        <div className=" bg-slate-900 text-white min-h-screen flex flex-col">
          <Nav />
          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <h1 className="text-center text-4xl font-bold pt-10">
                      Welcome to Demo Website
                    </h1>
                    <p className="text-center mt-4 text-gray-400">
                      Your content goes here. Use this space to describe your
                      application.
                    </p>
                  </div>
                }
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<User />} />
            </Routes>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
