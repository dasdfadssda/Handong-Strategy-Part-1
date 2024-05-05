import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import { theme } from "./Style/theme";
import MenuPage from "./Page/MenuPage.js";
import QuizPage from "./Page/QuizPage.js";
import QuizCompletionScreen from "./Components/App/quizcomplete.js";
import { ScoreProvider } from "./contexts/ScoreContext.js";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScoreProvider>
          <ScrollToTop />
          <Routes>
            {/* 기본 화면 설정 */}
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<MenuPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quiz-finish" element={<QuizCompletionScreen />} />
          </Routes>
        </ScoreProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
