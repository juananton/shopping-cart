function ProductsList({ products }) {
  return (
    <ul className='products'>
      {products.slice(0, 10).map(product => (
        <li key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <strong>{product.title}</strong> - <span>{product.price}€</span>
          </div>
          <button>Add to cart</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
