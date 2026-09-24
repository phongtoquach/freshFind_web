
function MarketPage() {
  return (
    <main className="market-page">
      <aside className="market-filter">
        <h2>Filter</h2>

        <div className="filter-group">
          <label>Market Type</label>
          <select defaultValue="all">
            <option value="all">All</option>
            <option value="farmers">Farmers Market</option>
            <option value="organic">Organic Market</option>
            <option value="seafood">Seafood Market</option>
            <option value="community">Community Market</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Open Day</label>
          <select defaultValue="all">
            <option value="all">Any day</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Price</label>
          <div className="check-list">
            <label><input type="checkbox" defaultChecked /> Free</label>
            <label><input type="checkbox" /> Paid</label>
          </div>
        </div>

        <button type="button" className="filter-button">Apply</button>
      </aside>

      <section className="market-content">
        <div className="market-header">
          <div>
            <p className="eyebrow">Fresh local finds</p>
            <h1>Markets near you</h1>
          </div>
          <button type="button" className="primary-button">Browse all markets</button>
        </div>

        <div className="market-grid">
          {markets.map((market) => (
            <article className="market-card" key={market.name}>
              <span className="market-tag">{market.type}</span>
              <h3>{market.name}</h3>
              <p>{market.location}</p>
              <p>{market.hours}</p>
              <p className="market-price">{market.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MarketPage;
