// MyLoans.tsx — 💳 내 대출 위젯
const MyLoans = () => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>💳 내 대출</h3>
            </div>
            <div className="widget-list">
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">주택담보대출</span>
                        <span className="value" style={{ color: 'var(--color-up)' }}>-5억 2,000만</span>
                    </div>
                    <span className="sub-label">연 3.8% · 다음 상환일 2026.03.15 (D-16)</span>
                </div>
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">신용대출</span>
                        <span className="value" style={{ color: 'var(--color-up)' }}>-1,500만</span>
                    </div>
                    <span className="sub-label">연 4.5% · 다음 상환일 2026.03.05 (D-6)</span>
                </div>
                <div className="widget-total">
                    <span className="label">월 상환 합계</span>
                    <span className="value" style={{ color: 'var(--color-up)' }}>약 185만원/월</span>
                </div>
            </div>
        </section>
    );
};

export default MyLoans;
