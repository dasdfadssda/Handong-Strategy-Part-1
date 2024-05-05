import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import { theme } from "./Style/theme";
import MenuPage from "./Page/MenuPage.js";
import QuizPage from "./Page/QuizPage.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* 기본 화면 설정 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<MenuPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
