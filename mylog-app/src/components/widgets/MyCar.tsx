// MyCar.tsx — 🚗 내 차 위젯
const MyCar = () => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>🚗 내 차</h3>
            </div>
            <div className="widget-block">
                <div className="block-name">테슬라 모델 3 롱레인지</div>
                <div className="sub-label" style={{ marginTop: '4px' }}>2024년식 · 22,000km</div>
                <div className="block-price-row">
                    <span className="block-price" style={{ fontSize: '18px' }}>약 4,200만</span>
                    <span className="change down" style={{ fontSize: '12px' }}>▼ 매입 대비 -800만</span>
                </div>
                <div className="block-note">중고차 시세 추정 · KB차차차 기준</div>
            </div>
        </section>
    );
};

export default MyCar;
