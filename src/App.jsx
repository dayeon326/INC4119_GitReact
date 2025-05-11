import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import CalculatePage from "./pages/CaculatePage";
import LikePage from "./pages/LikePage";// 취향 페이지 추가

const App = () => {
  // 로그인 상태를 관리하는 state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // 로그인 처리 함수
  const handleLogin = (username, password) => {
    // 실제로는 서버와 통신해야 하지만, 데모용으로 간단히 구현
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  // 페이지 렌더링 함수
  const renderPage = () => {
    switch (currentPage) {
      case "like":
        return <LikePage setCurrentPage={setCurrentPage}/>;
      // 취향 페이지 추가
      case "home":
        return <HomePage setCurrentPage={setCurrentPage}/>;
      case "about":
        return <AboutPage setCurrentPage={setCurrentPage}/>;
      case "projects":
        return <ProjectsPage setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage}/>;
      default:
        return <HomePage setCurrentPage={setCurrentPage}/>;
      case "calculate":
        return <CalculatePage setCurrentPage={setCurrentPage}/>;
    // 계산기 페이지 추가
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
