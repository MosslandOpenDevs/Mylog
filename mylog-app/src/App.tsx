// App.tsx — Mylog 루트 컴포넌트 + React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 레이아웃
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

// 페이지
import Home from './pages/Home';
import Shopping from './pages/Shopping';
import Hobbies from './pages/Hobbies';
import Assets from './pages/Assets';
import Settings from './pages/Settings';

// 스타일
import './styles/global.css';
import './styles/components.css';

function App() {
  return (
    <BrowserRouter>
      {/* 전역 헤더 + 네비 */}
      <Header />
      <Nav />

      {/* 라우트별 페이지 렌더링 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
