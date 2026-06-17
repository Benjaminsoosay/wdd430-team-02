export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#2b2520",
      color: "#dacfc4",
      padding: "2rem 1.5rem",
      textAlign: "center",
      marginTop: "2rem",
      borderRadius: "1.5rem"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <p style={{
          fontSize: "0.95rem",
          color: "#e8dfd6"
        }}>
          &copy; 2026 Handcrafted Haven | WDD 430 – Web Full-Stack Development | Brigham Young University - Idaho
        </p>
        <p style={{
          marginTop: "0.5rem",
          fontSize: "0.85rem",
          color: "#b5a89b"
        }}>
          Connecting artisans with customers who value unique, handcrafted items
        </p>
        <div style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap"
        }}>
          <a href="#" style={{ color: "#dacfc4", textDecoration: "none", fontSize: "0.85rem" }}>About</a>
          <a href="#" style={{ color: "#dacfc4", textDecoration: "none", fontSize: "0.85rem" }}>Shop</a>
          <a href="#" style={{ color: "#dacfc4", textDecoration: "none", fontSize: "0.85rem" }}>Contact</a>
          <a href="#" style={{ color: "#dacfc4", textDecoration: "none", fontSize: "0.85rem" }}>Privacy Policy</a>
          <a href="#" style={{ color: "#dacfc4", textDecoration: "none", fontSize: "0.85rem" }}>Terms of Service</a>
        </div>
        <div style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap"
        }}>
          <span style={{ fontSize: "1.5rem" }}>📱</span>
          <span style={{ fontSize: "1.5rem" }}>🐦</span>
          <span style={{ fontSize: "1.5rem" }}>📸</span>
          <span style={{ fontSize: "1.5rem" }}>▶️</span>
        </div>
      </div>
    </footer>
  );
}