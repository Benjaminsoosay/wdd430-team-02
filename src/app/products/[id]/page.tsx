import { getProductById } from '@/lib/db/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Await the params promise
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const getCategoryIcon = (cat: string) => {
    const icons: Record<string, string> = {
      'Pottery': '🏺',
      'Textiles': '🧣',
      'Woodworking': '🪵',
      'Jewelry': '💍',
      'Leather': '📓',
      'Candles': '🕯️',
      'Ceramics': '🎨',
      'Metalwork': '🔧',
      'Glass': '🔮',
      'Basketry': '🧺'
    }
    return icons[cat] || '🎨'
  }

  return (
    <main style={{
      minHeight: "100vh",
      padding: "2rem",
      backgroundColor: "#f7f2ec",
      color: "#2b2520"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        <Link
          href="/products"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#7c5f4b",
            textDecoration: "none",
            marginBottom: "1.5rem",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#f4ede7",
            borderRadius: "50px",
            border: "1px solid #e4d9cf"
          }}
        >
          ← Back to Products
        </Link>

        <div style={{
          backgroundColor: "#fffcf8",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          border: "1px solid #eee7e0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem"
          }}>
            <div style={{
              backgroundColor: "#f4ede7",
              borderRadius: "1rem",
              height: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "6rem"
            }}>
              {getCategoryIcon(product.category)}
            </div>

            <div>
              <div style={{
                fontSize: "0.8rem",
                color: "#7c5f4b",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontWeight: 600,
                marginBottom: "0.5rem"
              }}>
                {product.category}
              </div>
              
              <h1 style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#2b2520",
                marginBottom: "0.5rem"
              }}>
                {product.name}
              </h1>

              <p style={{
                fontSize: "1.1rem",
                color: "#5f554a",
                marginBottom: "0.5rem"
              }}>
                by <strong>{product.artisan}</strong>
              </p>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem"
              }}>
                <span style={{ color: "#f5a623", fontSize: "1.2rem" }}>★</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {product.rating.toFixed(1)}
                </span>
                <span style={{ color: "#5f554a", fontSize: "0.9rem" }}>
                  ({product.reviewCount} reviews)
                </span>
              </div>

              <div style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#7c5f4b",
                marginBottom: "1.5rem"
              }}>
                ${product.price.toFixed(2)}
              </div>

              <p style={{
                fontSize: "1rem",
                color: "#4d3e33",
                lineHeight: "1.8",
                marginBottom: "1.5rem"
              }}>
                {product.description}
              </p>

              <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap"
              }}>
                <div style={{
                  backgroundColor: "#f4ede7",
                  padding: "0.3rem 1rem",
                  borderRadius: "30px",
                  fontSize: "0.85rem"
                }}>
                  📦 {product.stock} in stock
                </div>
                {product.tags?.map((tag) => (
                  <span key={tag} style={{
                    backgroundColor: "#dacfc4",
                    padding: "0.3rem 1rem",
                    borderRadius: "30px",
                    fontSize: "0.8rem",
                    color: "#2b2520"
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>

              <button style={{
                marginTop: "1.5rem",
                backgroundColor: "#7c5f4b",
                color: "white",
                padding: "0.8rem 3rem",
                border: "none",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                width: "100%"
              }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}