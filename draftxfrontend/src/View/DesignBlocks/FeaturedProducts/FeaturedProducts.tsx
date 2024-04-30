
interface Product {
  productId: number; // Use camelCase for property names
  productName: string;
}



const FeaturedProducts = () => {
  

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

    </div>
  );
};

export default FeaturedProducts;