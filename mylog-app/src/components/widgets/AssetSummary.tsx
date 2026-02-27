// AssetSummary.tsx — 📊 총 자산 요약 위젯
const AssetSummary = () => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>📊 총 자산 요약</h3>
            </div>
            <div className="asset-summary-amount">
                <div className="asset-label">나의 순자산</div>
                <div className="asset-value">21억 4,200만</div>
                <div className="asset-change">전월 대비 ▲ 3,200만 (+1.5%)</div>
            </div>
            <div className="asset-bar">
                <div style={{ width: '60%', background: 'var(--color-gold)' }} />
                <div style={{ width: '18%', background: 'var(--color-down)' }} />
                <div style={{ width: '12%', background: 'var(--color-positive)' }} />
                <div style={{ width: '7%', background: 'var(--color-up)' }} />
                <div style={{ width: '3%', background: 'var(--color-purple)' }} />
            </div>
            <div className="asset-legend">
                <span>🟡 부동산 60%</span>
                <span>🔵 주식 18%</span>
                <span>🟢 예적금 12%</span>
                <span>🔴 코인 7%</span>
                <span>🟣 차량 3%</span>
            </div>
        </section>
    );
};

export default AssetSummary;
