import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import PostsPage from './pages/PostsPage';
import AuthFailPage from './pages/AuthFailPage';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="auth-fail" element={<AuthFailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
