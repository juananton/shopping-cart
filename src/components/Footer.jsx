import { useContext } from 'react';
import { FiltersContext } from '../contexts/FiltersContext';

function Footer() {
  const { category, minPrice } = useContext(FiltersContext);
  return (
    <div>
      Mostrando {category} de más de {minPrice} €
    </div>
  );
}

export default Footer;
