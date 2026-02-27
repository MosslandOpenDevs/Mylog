// MyStocks.tsx — 📈 내 주식 위젯
const MyStocks = () => {
    const stocks = [
        { name: '애플 (AAPL)', qty: '10주', price: '$189.30', change: '+1.2%', isUp: true },
        { name: '테슬라 (TSLA)', qty: '5주', price: '$248.50', change: '-0.8%', isUp: false },
        { name: '엔비디아 (NVDA)', qty: '3주', price: '$875.40', change: '+2.5%', isUp: true },
    ];

    return (
        <section className="card">
            <div className="card-header">
                <h3>📈 내 주식</h3>
            </div>
            <div className="widget-list">
                {stocks.map((s) => (
                    <div className="widget-row" key={s.name}>
                        <div className="left">
                            <span className="label">{s.name}</span>
                            <span className="sub-label">{s.qty}</span>
                        </div>
                        <div className="right">
                            <span className="value">{s.price}</span>
                            <span className={`change ${s.isUp ? 'up' : 'down'}`}>
                                {s.isUp ? '▲' : '▼'} {s.change}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="widget-total">
                    <span className="label">총 평가금액</span>
                    <span className="value" style={{ color: 'var(--color-up)' }}>$5,760.70 (+1.4%)</span>
                </div>
            </div>
        </section>
    );
};

export default MyStocks;
