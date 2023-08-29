import { useContext, useId } from 'react';
import { CATEGORIES } from '../constants/categories';
import { FiltersContext } from '../contexts/FiltersContext';

function Filters() {
  const { minPrice, setCategory, setMinPrice } = useContext(FiltersContext);

  const categoryFilterId = useId();
  const minPriceFilterId = useId();

  return (
    <section className='filters'>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          id={categoryFilterId}
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
        <label htmlFor={minPriceFilterId}>A partir de</label>
        <input
          type='range'
          id={minPriceFilterId}
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
