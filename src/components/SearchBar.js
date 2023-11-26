function SearchBar(props) {
  // props = products

  return (
    <div>
      <input
        type="text"
        value={props.searchItem}
        onChange={props.handleInputChange}
        placeholder="Search for products"
        className="search-bar"
      />
      <br />
      <input
        type="checkbox"
        name="stock-products"
        id="stock-products"
        onChange={props.handleCheckboxChange}
      />
      <label htmlFor="stock-products">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
