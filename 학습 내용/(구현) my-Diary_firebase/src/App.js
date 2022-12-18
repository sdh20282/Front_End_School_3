import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { useAuthContext } from './hooks/useAuthContext'

function App() {

  // 통신이 완료되었다면 true를 반환받습니다.
  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      {isAuthReady ? (
        <BrowserRouter>
          <Nav />
          <Routes>
            {/* 로그인 되있으면 홈으로, 아니라면 로그인 화면으로 이동합니다. */}
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace={true} />}></Route>
            {/* 로그인이 되어있다면 로그인 화면이나 회원가입 화면으로 가지 못하게 만듭니다. */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />}></Route>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />}></Route>
          </Routes>
        </BrowserRouter>
      ) : "loading..."}
    </div>
  );
}

export default App
