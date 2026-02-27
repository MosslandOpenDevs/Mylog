// ExchangeRate.tsx — 💱 환율 위젯 (컴팩트)
const ExchangeRate = () => {
    const rates = [
        { label: '💱 원/달러', value: '1,351.20', change: '▲0.31%', isUp: true },
        { label: '💱 원/엔(100)', value: '901.50', change: '▼0.15%', isUp: false },
        { label: '💱 원/유로', value: '1,462.80', change: '▲0.12%', isUp: true },
    ];

    return (
        <section className="exchange-card">
            {rates.map((r) => (
                <div className="exchange-row" key={r.label}>
                    <span className="ex-label">{r.label}</span>
                    <span className="ex-value">
                        {r.value}
                        <span className="ex-change" style={{ color: r.isUp ? 'var(--color-up)' : 'var(--color-down)' }}>
                            {r.change}
                        </span>
                    </span>
                </div>
            ))}
        </section>
    );
};

export default ExchangeRate;
