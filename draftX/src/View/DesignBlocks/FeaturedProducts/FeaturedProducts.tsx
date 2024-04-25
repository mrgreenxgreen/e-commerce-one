
interface Product {
  productId: number; // Use camelCase for property names
  productName: string;
}



const FeaturedProducts = () => {
  
  console.log(products);
  return (
    <div>
      <h2>Featured Items</h2>  {/* Add a heading for better presentation */}
      {/* <ul>
        {products.map((product) => (
          <li key={product.productId}> 
            {product.productName}
          </li>
        ))}
      </ul> */}
      {products}
    </div>
  );
};

export default FeaturedProducts;