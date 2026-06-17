export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      padding: "2rem",
      backgroundColor: "#f7f2ec",
      color: "#2b2520",
      fontFamily: "var(--font-geist-sans)"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        backgroundColor: "#fffcf8",
        borderRadius: "2rem",
        padding: "2.5rem 3rem",
        boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
        border: "1px solid #e8dfd6"
      }}>
        {/* Header */}
        <header style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          paddingBottom: "1.5rem",
          borderBottom: "3px solid #e4d9cf",
          flexWrap: "wrap"
        }}>
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: 700,
            color: "#2b2520",
            margin: "0"
          }}>
            🧵 Handcrafted <span style={{ color: "#7c5f4b" }}>Haven</span>
          </h1>
          <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href="#" style={{ color: "#7c5f4b", textDecoration: "none", fontWeight: 500 }}>Home</a>
            <a href="#" style={{ color: "#7c5f4b", textDecoration: "none", fontWeight: 500 }}>Shop</a>
            <a href="#" style={{ color: "#7c5f4b", textDecoration: "none", fontWeight: 500 }}>About</a>
            <a href="#" style={{ color: "#7c5f4b", textDecoration: "none", fontWeight: 500 }}>Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{ 
          textAlign: "center", 
          padding: "3rem 2rem",
          backgroundColor: "#f4ede7",
          borderRadius: "1.5rem",
          margin: "2rem 0"
        }}>
          <h2 style={{ 
            fontSize: "2.8rem", 
            fontWeight: 700,
            color: "#2b2520",
            marginBottom: "0.5rem"
          }}>
            Discover Unique Handcrafted Treasures
          </h2>
          <p style={{ 
            fontSize: "1.2rem", 
            color: "#4d3e33",
            maxWidth: "600px",
            margin: "0 auto 1.5rem auto"
          }}>
            Connect with talented artisans and find one-of-a-kind creations made with love and skill.
          </p>
          <button style={{
            backgroundColor: "#7c5f4b",
            color: "white",
            padding: "0.8rem 2.5rem",
            border: "none",
            borderRadius: "50px",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}>
            Explore Now
          </button>
        </section>

        {/* Featured Products */}
        <section style={{ margin: "2rem 0" }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: 600,
            color: "#2b2520",
            marginBottom: "1.5rem"
          }}>
            Featured Products
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem"
          }}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} style={{
                backgroundColor: "#fcf9f5",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid #eee7e0",
                textAlign: "center"
              }}>
                <div style={{
                  backgroundColor: "#e4d9cf",
                  borderRadius: "0.8rem",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7c5f4b",
                  fontSize: "3rem"
                }}>
                  🎨
                </div>
                <h3 style={{ marginTop: "0.8rem", color: "#2b2520", fontSize: "1.1rem" }}>Handcrafted Item {item}</h3>
                <p style={{ color: "#7c5f4b", fontWeight: 600 }}>$24.99</p>
                <button style={{
                  backgroundColor: "#dacfc4",
                  color: "#2b2520",
                  padding: "0.4rem 1.5rem",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                  fontWeight: 500
                }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section style={{
          backgroundColor: "#f4ede7",
          borderRadius: "1.5rem",
          padding: "2rem",
          margin: "2rem 0"
        }}>
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: 600,
            color: "#2b2520",
            marginBottom: "0.5rem"
          }}>
            About Handcrafted Haven
          </h2>
          <p style={{ color: "#4d3e33", maxWidth: "700px" }}>
            Handcrafted Haven is a marketplace dedicated to connecting artisans with people who appreciate 
            the beauty of handmade goods. Every item tells a story of craftsmanship, tradition, and passion.
          </p>
        </section>

        {/* Become a Seller */}
        <section style={{
          textAlign: "center",
          padding: "2rem",
          border: "2px dashed #7c5f4b",
          borderRadius: "1.5rem",
          margin: "2rem 0"
        }}>
          <h2 style={{ fontSize: "1.5rem", color: "#2b2520" }}>
            🛍️ Become a Seller
          </h2>
          <p style={{ color: "#4d3e33" }}>
            Share your craft with the world. Join our community of artisans today.
          </p>
          <button style={{
            backgroundColor: "#7c5f4b",
            color: "white",
            padding: "0.6rem 2rem",
            border: "none",
            borderRadius: "50px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "0.5rem"
          }}>
            Sign Up Now
          </button>
        </section>

        {/* Footer */}
        <footer style={{
          marginTop: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #e4d9cf",
          textAlign: "center",
          color: "#5f554a"
        }}>
          <p>© 2026 Handcrafted Haven. All rights reserved.</p>
          <p style={{ fontSize: "0.8rem" }}>WDD 430 Group Project · BYU-Idaho</p>
        </footer>
      </div>
    </main>
  );
}