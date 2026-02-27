// MyPension.tsx — 🏦 연금 / 퇴직금 위젯
const MyPension = () => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>🏦 연금 / 퇴직금</h3>
            </div>
            <div className="widget-list">
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">국민연금</span>
                        <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--text-secondary)' }}>예상 월 82만</span>
                    </div>
                    <span className="sub-label">납부 138개월 · 65세 수령 시 기준</span>
                </div>
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">퇴직연금 (DC)</span>
                        <span className="value">4,850만</span>
                    </div>
                    <span className="sub-label">수익률 +6.2% · TDF2050 펀드 운용</span>
                </div>
            </div>
        </section>
    );
};

export default MyPension;
