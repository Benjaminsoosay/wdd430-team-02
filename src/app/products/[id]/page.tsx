import ProductCard from '../../../components/ProductCard';
import { getAllProducts } from '../../../lib/db/products';

export default async function Home() {
  const products = await getAllProducts();
  
  return (
    <main style={{ padding: "2rem", backgroundColor: "#f7f2ec", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#2b2520" }}>Handcrafted Haven</h1>
      <p style={{ color: "#5f554a", marginBottom: "2rem" }}>Discover unique handcrafted products</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            artisan={product.artisan}
            rating={product.rating}
          />
        ))}
      </div>
    </main>
  );
}