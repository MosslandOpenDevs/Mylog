// Nav.tsx — 메인 네비게이션 (홈 / 쇼핑 / 취미 / 자산)
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    홈 (대시보드)
                </NavLink>
                <NavLink to="/shopping" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    🛒 쇼핑
                </NavLink>
                <NavLink to="/hobbies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    🎮 취미
                </NavLink>
                <NavLink to="/assets" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    💰 자산
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
