import { Link, useLocation } from "react-router-dom";
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const isMypage = currentPage === "/mypage";

  return (
    <header className={isMypage ? "header-solid" : ""}>
        <div className="header-container">
            <Link to="/" className="header-title">LIKELION</Link>
            <div className="header-factors">
                <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
                    New
                </Link>
                <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : ""}>
                    Diffuser
                </Link>
                <Link to="/perfume" className={currentPage === "/perfume" ? "active" : ""}>
                    Perfume 
                </Link>
                <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}>
                    Mypage
                </Link>
            </div>
        </div>
    </header>
  );
};

export default Header;