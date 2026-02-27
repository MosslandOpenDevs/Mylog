// Home.tsx — 홈 (메인 대시보드) 페이지
// 좌측: 쇼핑/취미/자산 피드 | 우측: 자산 위젯 10개

import AssetSummary from '../components/widgets/AssetSummary';
import MyProperty from '../components/widgets/MyProperty';
import MyStocks from '../components/widgets/MyStocks';
import MySavings from '../components/widgets/MySavings';
import MyCrypto from '../components/widgets/MyCrypto';
import MyCar from '../components/widgets/MyCar';
import MyLoans from '../components/widgets/MyLoans';
import MyPension from '../components/widgets/MyPension';
import SubscriptionCalendar from '../components/widgets/SubscriptionCalendar';
import ExchangeRate from '../components/widgets/ExchangeRate';

const Home = () => {
    return (
        <main className="main">
            <div className="dashboard-grid">
                {/* ─── 좌측: 피드 영역 ─── */}
                <div className="feed-column">

                    {/* 🛒 실시간 핫딜 보드 */}
                    <section className="feed-card">
                        <div className="section-title">
                            <h2>🛒 실시간 핫딜 보드</h2>
                            <div className="feed-tabs">
                                <button className="feed-tab active">전체 핫딜</button>
                                <button className="feed-tab">전자기기</button>
                                <button className="feed-tab">패션/잡화</button>
                            </div>
                        </div>
                        <div className="feed-grid">
                            <div className="feed-item">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80" alt="shoes" />
                                <p>[무신사] 나이키 에어맥스 97 한정판 타임세일</p>
                                <span className="price">129,000원 (40% 할인)</span>
                            </div>
                            <div className="feed-item">
                                <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&q=80" alt="tech" />
                                <p>[11번가] 맥북 프로 M3 14인치 기본형 역대가 특가</p>
                                <span className="price">1,890,000원 (역대가)</span>
                            </div>
                        </div>
                        <div className="feed-list">
                            <div className="feed-list-item">· [알림] 위시리스트 '소니 헤드폰'이 목표가(30만 원)에 도달했습니다!</div>
                            <div className="feed-list-item">· [쿠팡] 닭가슴살 5kg 특가 세트 (와우 멤버십 전용)</div>
                            <div className="feed-list-item">· [스팀] 주말 배급사 특별 할인 - 캡콤 프랜차이즈 최대 80%</div>
                            <div className="feed-list-item">· [오늘의집] 자취생 필수템 조명 기획전 얼리버드 쿠폰</div>
                        </div>
                    </section>

                    {/* 🎮 덕질 뉴스 피드 */}
                    <section className="feed-card">
                        <div className="section-title">
                            <h2>🎮 덕질 뉴스 피드</h2>
                            <div className="feed-tabs">
                                <button className="feed-tab active">IT/테크</button>
                                <button className="feed-tab">콘솔 게임</button>
                                <button className="feed-tab">운동/건강</button>
                            </div>
                        </div>
                        <div className="feed-grid">
                            <div className="feed-item">
                                <img src="https://images.unsplash.com/photo-1605330367208-a532729a674e?w=300&q=80" alt="gaming" />
                                <p>GTA 6 새로운 트레일러 유출 분석 및 출시일 예측</p>
                                <span className="source">루리웹 콘솔 정보</span>
                            </div>
                            <div className="feed-item">
                                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80" alt="workout" />
                                <p>운동 정체기를 극복하는 '3분할 점진적 과부하' 루틴 가이드</p>
                                <span className="source">피트니스 갤러리</span>
                            </div>
                        </div>
                        <div className="feed-list">
                            <div className="feed-list-item">· [유튜브] IT섭 - 드디어 M4 아이패드 프로 샀습니다. 솔직 리뷰</div>
                            <div className="feed-list-item">· [기록] 이번 주 '헬스장 방문' 4회 달성! (잔디심기 완료)</div>
                            <div className="feed-list-item">· [넷플릭스] 이번 주말 정주행하기 좋은 SF 오리지널 시리즈 3선</div>
                            <div className="feed-list-item">· [아티클] React 19 컴파일러 도입 후 프론트엔드 최적화의 변화</div>
                        </div>
                    </section>

                    {/* 💰 자산 & 투자 모니터링 */}
                    <section className="feed-card">
                        <div className="section-title">
                            <h2>💰 자산 & 투자 모니터링</h2>
                            <div className="feed-tabs">
                                <button className="feed-tab active">관심 부동산</button>
                                <button className="feed-tab">미국 주식</button>
                                <button className="feed-tab">가상화폐</button>
                            </div>
                        </div>
                        <div className="feed-grid">
                            <div className="feed-item">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80" alt="real-estate" />
                                <p>[실거래가] 마포래미안푸르지오 34평 18.5억 거래 (▲5,000)</p>
                                <span className="source">국토부 실거래가 알리미</span>
                            </div>
                            <div className="feed-item">
                                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&q=80" alt="stocks" />
                                <p>테슬라(TSLA) 로보택시 발표 직후 애널리스트 보고서 요약</p>
                                <span className="source">Yahoo Finance</span>
                            </div>
                        </div>
                        <div className="feed-list">
                            <div className="feed-list-item">· 📅 [청약 캘린더] 이번 주 특별공급 '잠실 래미안 아이파크' 일정</div>
                            <div className="feed-list-item">· [배당] 애플(AAPL) 2분기 배당금이 입금되었습니다. 내역 확인하기</div>
                            <div className="feed-list-item">· [환율 알림] 원/달러 환율이 1,350원을 돌파했습니다.</div>
                            <div className="feed-list-item">· [자산 리포트] 이번 달 현금 흐름 요약: 저축률 65% 달성 목표 순항 중</div>
                        </div>
                    </section>
                </div>

                {/* ─── 우측: 자산 사이드바 ─── */}
                <aside className="sidebar">
                    {/* 로그인 */}
                    <div className="login-card">
                        <p>Mylog 계정으로 세상과 연결해보세요</p>
                        <button className="login-btn">Mylog 계정으로 로그인</button>
                        <div className="login-links">
                            <span>계정 찾기</span>
                            <span className="divider">|</span>
                            <span>비밀번호 재설정</span>
                            <span className="divider">|</span>
                            <span>회원가입</span>
                        </div>
                    </div>

                    {/* 자산 위젯 10개 */}
                    <AssetSummary />
                    <MyProperty />
                    <MyStocks />
                    <MySavings />
                    <MyCrypto />
                    <MyCar />
                    <MyLoans />
                    <MyPension />
                    <SubscriptionCalendar />
                    <ExchangeRate />
                </aside>
            </div>
        </main>
    );
};

export default Home;
