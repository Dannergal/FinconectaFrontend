//import PaginaComponent from "./assets/Components/PaginaComponent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeComponent from "./assets/Components/HomeComponent";
import AboutComponent from "./assets/Components/AboutComponent";
import ServicesComponent from "./assets/Components/ServicesComponent";
import ContactComponent from "./assets/Components/ContactComponent";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider

const theme = createTheme(); // Create a theme instance

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <header>
              <h1>Finconecta</h1>
            </header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/services" element={<ServicesComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </main>
            <footer>
              <p>&copy; 2024 My Website. All rights reserved.</p>
            </footer>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
