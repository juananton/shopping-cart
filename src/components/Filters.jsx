import { CATEGORIES } from '../constants/categories';

function Filters({ setCategory, category, minPrice, setMinPrice }) {
  return (
    <section className='filters'>
      <div>
        <label htmlFor='category'>Categoría</label>
        <select
          id='category'
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value='all'>Todas</option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='price'>Precio</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          value={minPrice}
          onChange={e => Number(setMinPrice(e.target.value))}
        />
        <span>{minPrice}€</span>
      </div>
    </section>
  );
}

export default Filters;
