import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import TranslationPage from './views/TranslationPage';
import ProfilePage from "./views/ProfilePage";
import HomePage from "./views/HomePage";
import Header from "./components/Header"

export default function App() {
  return (
    <Router>
      <div>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}