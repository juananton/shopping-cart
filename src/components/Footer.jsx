import { useFilters } from '../Hooks/useFilters';

function Footer() {
  const { category, minPrice } = useFilters();
  return (
    <div>
      Mostrando {category} de más de {minPrice} €
    </div>
  );
}

export default Footer;
