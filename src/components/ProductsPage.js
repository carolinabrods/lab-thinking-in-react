import { useState } from 'react';
import productsList from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// create page with title
// add components to it
// state stays here

function ProductsPage() {
  // create state variables for search, filtered and in stock products
  const [products, setProducts] = useState(productsList);
  const [searchItem, setSearchItem] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsList);
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  };

  const handleCheckboxChange = () => {
    const inStockItems = products.filter((product) => product.inStock === true);

    setChecked(!checked);

    // why does it need to be the opposite?
    checked ? setFilteredProducts(products) : setFilteredProducts(inStockItems);
  };

  return (
    <div>
      <h1>IronStore</h1>
      {/* pass a copy of the state variable to child components */}
      <SearchBar
        products={products}
        searchItem={searchItem}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
