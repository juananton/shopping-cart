import { useFilters } from '../Hooks/useFilters';
import { capitalizeWord } from '../functions/capitalizeWords';

function Footer() {
  const { category, minPrice } = useFilters();
  console.log(category);
  return (
    <div>
      Showing {capitalizeWord(category)} over ${minPrice}
    </div>
  );
}

export default Footer;
