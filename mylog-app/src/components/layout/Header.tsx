// Header.tsx — 상단 헤더 (로고 + 검색 + 알림/프로필)
const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                {/* 로고 영역 */}
                <div className="logo">
                    <div className="logo-icon">M</div>
                    Mylog
                </div>

                {/* 검색바 */}
                <div className="search-bar">
                    <input type="text" placeholder="검색어를 입력하세요" />
                    <button className="search-btn">🔍</button>
                </div>

                {/* 유틸리티 영역 */}
                <div className="header-utils">
                    <button className="btn-icon" aria-label="알림">🔔</button>
                    <button className="btn-icon" aria-label="프로필">👤</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
