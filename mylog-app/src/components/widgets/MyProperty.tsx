// MyProperty.tsx — 🏠 내 부동산 위젯
const MyProperty = () => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>🏠 내 부동산</h3>
            </div>
            <div className="widget-block">
                <div className="block-title">내 아파트</div>
                <div className="block-name">마포래미안푸르지오 34평</div>
                <div className="block-price-row">
                    <span className="block-price">18.5억</span>
                    <span className="change up" style={{ fontWeight: 700, fontSize: '13px' }}>▲ 5,000만 (+2.8%)</span>
                </div>
                <div className="block-note">
                    매입가 대비 <span style={{ color: 'var(--color-up)', fontWeight: 600 }}>+2억 3,000만</span> 상승 · 국토부 실거래가
                </div>
            </div>
        </section>
    );
};

export default MyProperty;
