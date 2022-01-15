import './App.css';
import Leitner from './pages/Leitner';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import WordsContextProvider from "./context/WordsContextProvider"
import { BrowserRouter } from "react-router-dom"
import WordsPage from './pages/WordsPage';
import Header from './components/Header';
import LearendWords from './pages/LearendWords';

function App() {
  return (
    <BrowserRouter>
      <WordsContextProvider>
        <Header />
        <Routes>
          <Route path={"/leitner"} element={<Leitner />} />
          <Route path={"/learning/:level"} element={<WordsPage />} />
          <Route path={"/learnedwords"} element={<LearendWords />} />
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </WordsContextProvider>
    </BrowserRouter>


  );
}

export default App;
