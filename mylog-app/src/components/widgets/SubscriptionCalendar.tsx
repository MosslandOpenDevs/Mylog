// SubscriptionCalendar.tsx — 📅 청약 캘린더 위젯
const SubscriptionCalendar = () => {
    return (
        <section className="card">
            <div className="card-header">
                <h3>📅 청약 캘린더</h3>
            </div>
            <div className="widget-list">
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">잠실 래미안 아이파크</span>
                        <span className="change up" style={{ fontWeight: 700 }}>D-4</span>
                    </div>
                    <span className="sub-label">특별공급 03.03 (월) · 1순위 03.04 (화)</span>
                </div>
                <div className="widget-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label">둔촌 올림픽파크포레온</span>
                        <span className="sub-label" style={{ fontWeight: 600 }}>D-11</span>
                    </div>
                    <span className="sub-label">1순위 03.10 (월) · 당첨 03.17 (월)</span>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionCalendar;
