import { useId } from 'react';
import { useFilters } from '../Hooks/useFilters';
import { useProducts } from '../Hooks/useProducts';
import { capitalizeWord } from '../functions/capitalizeWords';

function Filters() {
  const { minPrice, setCategory, setMinPrice } = useFilters();
  const { CATEGORIES } = useProducts();

  const categoryFilterId = useId();
  const minPriceFilterId = useId();

  return (
    <section className='filters'>
      <div>
        <label htmlFor={categoryFilterId}>Showing</label>
        <select
          id={categoryFilterId}
          onChange={e => setCategory(e.target.value)}
        >
          <option value={'all'}>All</option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>
              {capitalizeWord(cat)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={minPriceFilterId}>Over</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          value={minPrice}
          onChange={e => Number(setMinPrice(e.target.value))}
        />
        <span>${minPrice}</span>
      </div>
    </section>
  );
}

export default Filters;
