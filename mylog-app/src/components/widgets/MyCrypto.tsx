// MyCrypto.tsx — 🪙 내 코인 위젯
const MyCrypto = () => {
    const coins = [
        { name: '비트코인 (BTC)', qty: '0.15 BTC', value: '1,387만', change: '-1.2%', isUp: false },
        { name: '이더리움 (ETH)', qty: '1.5 ETH', value: '495만', change: '+0.8%', isUp: true },
    ];

    return (
        <section className="card">
            <div className="card-header">
                <h3>🪙 내 코인</h3>
            </div>
            <div className="widget-list">
                {coins.map((c) => (
                    <div className="widget-row" key={c.name}>
                        <div className="left">
                            <span className="label">{c.name}</span>
                            <span className="sub-label">{c.qty}</span>
                        </div>
                        <div className="right">
                            <span className="value">{c.value}</span>
                            <span className={`change ${c.isUp ? 'up' : 'down'}`}>
                                {c.isUp ? '▲' : '▼'} {c.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyCrypto;
