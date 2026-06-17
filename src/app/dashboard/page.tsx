import { getAllProducts } from '@/lib/db/products';
import { getAllSellers } from '@/lib/db/sellers';
import { getAllReviews } from '@/lib/db/reviews';

export default async function DashboardPage() {
  const products = await getAllProducts();
  const sellers = await getAllSellers();
  const reviews = await getAllReviews();

  // Calculate statistics
  const totalProducts = products.length;
  const totalSellers = sellers.length;
  const totalReviews = reviews.length;
  const totalRevenue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const avgProductPrice = products.reduce((sum, p) => sum + p.price, 0) / totalProducts;

  return (
    <main style={{
      minHeight: "100vh",
      padding: "2rem",
      backgroundColor: "#f7f2ec"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#2b2520",
          marginBottom: "1.5rem"
        }}>
          📊 Dashboard
        </h1>

        {/* Stats Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem"
        }}>
          <div style={{
            backgroundColor: "#fffcf8",
            padding: "1.5rem",
            borderRadius: "1rem",
            border: "1px solid #eee7e0",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem" }}>📦</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2b2520" }}>
              {totalProducts}
            </div>
            <div style={{ color: "#5f554a" }}>Total Products</div>
          </div>

          <div style={{
            backgroundColor: "#fffcf8",
            padding: "1.5rem",
            borderRadius: "1rem",
            border: "1px solid #eee7e0",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem" }}>👩‍🎨</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2b2520" }}>
              {totalSellers}
            </div>
            <div style={{ color: "#5f554a" }}>Total Sellers</div>
          </div>

          <div style={{
            backgroundColor: "#fffcf8",
            padding: "1.5rem",
            borderRadius: "1rem",
            border: "1px solid #eee7e0",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem" }}>⭐</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2b2520" }}>
              {totalReviews}
            </div>
            <div style={{ color: "#5f554a" }}>Total Reviews</div>
          </div>

          <div style={{
            backgroundColor: "#fffcf8",
            padding: "1.5rem",
            borderRadius: "1rem",
            border: "1px solid #eee7e0",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "2rem" }}>💰</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#7c5f4b" }}>
              ${totalRevenue.toFixed(2)}
            </div>
            <div style={{ color: "#5f554a" }}>Total Inventory Value</div>
          </div>
        </div>

        {/* Products Table */}
        <div style={{
          backgroundColor: "#fffcf8",
          borderRadius: "1rem",
          padding: "1.5rem",
          border: "1px solid #eee7e0",
          marginBottom: "2rem"
        }}>
          <h2 style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#2b2520",
            marginBottom: "1rem"
          }}>
            📦 Products
          </h2>
          <div style={{
            overflowX: "auto"
          }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse"
            }}>
              <thead>
                <tr style={{
                  borderBottom: "2px solid #e4d9cf",
                  textAlign: "left"
                }}>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Name</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Category</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Artisan</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Price</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Stock</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Rating</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} style={{
                    borderBottom: "1px solid #eee7e0"
                  }}>
                    <td style={{ padding: "0.75rem" }}>{product.name}</td>
                    <td style={{ padding: "0.75rem" }}>{product.category}</td>
                    <td style={{ padding: "0.75rem" }}>{product.artisan}</td>
                    <td style={{ padding: "0.75rem", fontWeight: 600, color: "#7c5f4b" }}>
                      ${product.price.toFixed(2)}
                    </td>
                    <td style={{ padding: "0.75rem" }}>{product.stock}</td>
                    <td style={{ padding: "0.75rem" }}>
                      ⭐ {product.rating.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sellers Table */}
        <div style={{
          backgroundColor: "#fffcf8",
          borderRadius: "1rem",
          padding: "1.5rem",
          border: "1px solid #eee7e0",
          marginBottom: "2rem"
        }}>
          <h2 style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#2b2520",
            marginBottom: "1rem"
          }}>
            👩‍🎨 Sellers
          </h2>
          <div style={{
            overflowX: "auto"
          }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse"
            }}>
              <thead>
                <tr style={{
                  borderBottom: "2px solid #e4d9cf",
                  textAlign: "left"
                }}>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Name</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Location</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Specialties</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Products</th>
                  <th style={{ padding: "0.75rem", color: "#5f554a" }}>Rating</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map((seller) => {
                  const sellerProducts = products.filter(p => p.artisanId === seller.id);
                  return (
                    <tr key={seller.id} style={{
                      borderBottom: "1px solid #eee7e0"
                    }}>
                      <td style={{ padding: "0.75rem" }}>
                        <strong>{seller.name}</strong>
                      </td>
                      <td style={{ padding: "0.75rem" }}>{seller.location}</td>
                      <td style={{ padding: "0.75rem" }}>
                        {seller.specialties.join(', ')}
                      </td>
                      <td style={{ padding: "0.75rem" }}>{sellerProducts.length}</td>
                      <td style={{ padding: "0.75rem" }}>
                        ⭐ {seller.rating || 'N/A'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back to Home */}
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#7c5f4b",
            textDecoration: "none",
            fontWeight: 500,
            padding: "0.5rem 1.5rem",
            backgroundColor: "#f4ede7",
            borderRadius: "50px",
            border: "1px solid #e4d9cf",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e4d9cf";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f4ede7";
          }}
        >
          <span>←</span> Back to Home
        </a>
      </div>
    </main>
  );
}