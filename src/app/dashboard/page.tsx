import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "2rem",
      backgroundColor: "#f7f2ec",
      color: "#2b2520"
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
              0
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
              0
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
              0
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
              $0.00
            </div>
            <div style={{ color: "#5f554a" }}>Total Revenue</div>
          </div>
        </div>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#7c5f4b",
            textDecoration: "none",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#f4ede7",
            borderRadius: "50px",
            border: "1px solid #e4d9cf"
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}