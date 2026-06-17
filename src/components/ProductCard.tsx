"use client";

import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  price: number
  category: string
  artisan: string
  rating: number
}

export default function ProductCard({ id, name, price, category, artisan, rating }: ProductCardProps) {
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
    <Link 
      href={`/products/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block"
      }}
    >
      <div style={{
        backgroundColor: "#fffcf8",
        border: "1px solid #eee7e0",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        cursor: "pointer",
        height: "100%"
      }}>
        <div style={{
          backgroundColor: "#f4ede7",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.5rem"
        }}>
          <span>{getCategoryIcon(category)}</span>
        </div>
        
        <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
          <div style={{
            fontSize: "0.7rem",
            color: "#7c5f4b",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontWeight: 600,
            marginBottom: "0.3rem"
          }}>
            {category}
          </div>
          <h3 style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#2b2520",
            marginBottom: "0.2rem"
          }}>
            {name}
          </h3>
          <p style={{
            fontSize: "0.85rem",
            color: "#5f554a"
          }}>
            by {artisan}
          </p>
          
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0.75rem"
          }}>
            <span style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#7c5f4b"
            }}>
              ${price.toFixed(2)}
            </span>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem"
            }}>
              <span style={{ color: "#f5a623" }}>★</span>
              <span style={{ fontSize: "0.85rem", color: "#5f554a" }}>
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}