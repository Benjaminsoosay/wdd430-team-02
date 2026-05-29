"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const products = {
  "1": { id: "1", name: "Handmade Ceramic Mug", price: 35, rating: "★★★★★", reviews: 48, description: "Beautiful hand-thrown ceramic mug with earthy glaze.", details: "Each mug is uniquely hand-crafted, no two are exactly alike. Dishwasher safe.", seller: "Emily Ceramics", sellerId: "seller1", icon: "🏺" },
  "2": { id: "2", name: "Woven Wall Hanging", price: 65, rating: "★★★★★", reviews: 32, description: "Macrame wall hanging made with natural cotton fibers.", details: "100% organic cotton, perfect for any room décor.", seller: "Textile Arts", sellerId: "seller2", icon: "🧵" },
  "3": { id: "3", name: "Wooden Cutting Board", price: 45, rating: "★★★★☆", reviews: 25, description: "Handcrafted bamboo cutting board with juice groove.", details: "Sustainably sourced bamboo with food-safe finish.", seller: "Woodcraft Co", sellerId: "seller3", icon: "🪵" }
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = typeof params.id === 'string' ? params.id : params.id?.[0];
  const product = productId ? products[productId as keyof typeof products] : null;

  if (!product) {
    return (
      <div className="container-responsive py-20 text-center">
        <h1 className="text-3xl font-bold text-haven-primary mb-4">Product not found</h1>
        <Link href="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-haven-secondary py-4">
        <div className="container-responsive">
          <Link href="/products" className="text-haven-primary hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 sm:py-12 md:py-16 bg-haven-background">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-haven-secondary to-haven-background rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-7xl sm:text-8xl md:text-9xl">{product.icon}</div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="section-title text-3xl md:text-4xl mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-yellow-500 text-lg">{product.rating}</div>
                <span className="text-haven-accent">({product.reviews} reviews)</span>
              </div>

              <p className="text-gray-600 mb-6 text-lg">{product.description}</p>

              <div className="mb-8">
                <p className="text-sm text-haven-accent mb-2">By {product.seller}</p>
                <div className="text-4xl font-bold text-haven-primary mb-4">
                  ${product.price}
                </div>
              </div>

              <div className="bg-haven-secondary bg-opacity-30 p-4 sm:p-6 rounded-lg mb-8">
                <h3 className="font-bold text-haven-primary mb-2">Product Details</h3>
                <p className="text-haven-text opacity-75">{product.details}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex-1 text-center">
                  Add to Cart
                </button>
                <button className="btn-secondary flex-1 text-center">
                  ♡ Save
                </button>
              </div>

              <Link href={`/sellers/${product.sellerId}`} className="mt-6 p-4 border-2 border-haven-primary text-center rounded-lg hover:bg-haven-primary hover:text-white transition-all font-semibold">
                Visit Seller Profile
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-bold text-haven-primary mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $100</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-bold text-haven-primary mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">Handcrafted with care</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">↩️</div>
              <h3 className="font-bold text-haven-primary mb-2">30-Day Returns</h3>
              <p className="text-sm text-gray-600">Hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}