import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";

import Header from './component/Header';
import Footer from './component/Footer';
import ToolBar from './component/ToolBar';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage'
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume'
import New from './pages/ProductPage/New'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [cookies] = useCookies(["accessToken"]);

    useEffect(() => {
        setIsLogin(!!cookies.accessToken);
    }, [cookies.accessToken]);

  return (
      <CookiesProvider>
        <Router>
          <Header />
            <ToolBar isLogin={isLogin} onLoginChange={setIsLogin} />
          <Routes>
            <Route path='/' element={<Home onLoginChange={setIsLogin} />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/diffuser' element={<Diffuser />} />
            <Route path='/perfume' element={<Perfume />} />
            <Route path='/new' element={<New />} />
          </Routes>
          <Footer />
        </Router>
      </CookiesProvider>
  );
}

export default App;
