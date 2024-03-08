import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./components/context/github/GithubContext";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import { AlertContextProvider } from "./components/context/alert/AlertContext";
import Alert from "./components/layouts/Alert";
import UserDetailsPage from "./components/pages/UserDetailsPage";

const App = () => {
  console.log("app");
  return (
    <AlertContextProvider>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/user/:login" element={<UserDetailsPage />} />
                <Route path="/notfound" element={<NotFoundPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </AlertContextProvider>
  );
};

export default App;
