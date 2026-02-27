// MySavings.tsx — 💵 내 예적금 위젯
const MySavings = () => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>💵 내 예적금</h3>
            </div>
            <div className="widget-list">
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">카카오뱅크 정기예금</span>
                        <span className="value">3,000만</span>
                    </div>
                    <span className="sub-label">연 3.5% · 만기 2026.08.15 (D-169)</span>
                </div>
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">토스뱅크 적금</span>
                        <span className="value">월 50만</span>
                    </div>
                    <span className="sub-label">연 4.0% · 12회차 중 8회 완료 · 만기 2026.06</span>
                </div>
                <div className="widget-total">
                    <span className="label">예상 이자 합계</span>
                    <span className="value" style={{ color: 'var(--color-positive)' }}>+약 142만원</span>
                </div>
            </div>
        </section>
    );
};

export default MySavings;
