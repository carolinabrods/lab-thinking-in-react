function ProductRow(props) {
  // props = product
  // save some of the product properties in a variable
  const { name, price, inStock, id } = props;

  const showAvailability = () => {
    return inStock ? (
      <td className="normal">{name}</td>
    ) : (
      <td className="red">{name}</td>
    );
  };

  return (
    <>
      <tr key={id}>
        {showAvailability()}
        <td>{price}</td>
      </tr>
    </>
  );
}

export default ProductRow;
