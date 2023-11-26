import ProductRow from './ProductRow';

function ProductTable(props) {
  // props = products

  // save in a variable the properties needed from products
  // const { name, price, inStock } = props;

  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>

          {props.products.map((product) => {
            return (
              <ProductRow
                key={product.id}
                name={product.name}
                price={product.price}
                inStock={product.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
