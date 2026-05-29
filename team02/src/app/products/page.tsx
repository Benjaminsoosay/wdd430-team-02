import Link from "next/link";

const products = [
  {
    id: "prod1",
    name: "Handmade Ceramic Bowl",
    seller: "Emily Ceramics",
    price: "$45",
    category: "Pottery",
    icon: "🏺",
    rating: "★★★★★"
  },
  {
    id: "prod2",
    name: "Woven Wall Hanging",
    seller: "Textile Arts",
    price: "$120",
    category: "Weaving",
    icon: "🧵",
    rating: "★★★★★"
  },
  {
    id: "prod3",
    name: "Wooden Cutting Board",
    seller: "Woodcraft Co",
    price: "$85",
    category: "Woodworking",
    icon: "🪵",
    rating: "★★★★★"
  },
  {
    id: "prod4",
    name: "Ceramic Mug Set",
    seller: "Emily Ceramics",
    price: "$65",
    category: "Pottery",
    icon: "🏺",
    rating: "★★★★☆"
  },
  {
    id: "prod5",
    name: "Hand-woven Scarf",
    seller: "Textile Arts",
    price: "$95",
    category: "Weaving",
    icon: "🧵",
    rating: "★★★★★"
  },
  {
    id: "prod6",
    name: "Wooden Jewelry Box",
    seller: "Woodcraft Co",
    price: "$110",
    category: "Woodworking",
    icon: "🪵",
    rating: "★★★★☆"
  }
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-haven-accent py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <h1 className="section-title text-4xl md:text-5xl text-haven-background">Our Collection</h1>
          <p className="text-lg md:text-xl text-haven-background mt-4 opacity-90">
            Discover unique handcrafted treasures from our talented artisans
          </p>
        </div>
      </section>

      {/* Filters/Categories */}
      <section className="bg-white border-b border-haven-secondary py-6 sm:py-8">
        <div className="container-responsive">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-haven-primary text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all">
              All Products
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-2 border-2 border-haven-primary text-haven-primary rounded-full text-sm font-semibold hover:bg-haven-primary hover:text-white transition-all">
              Pottery
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-2 border-2 border-haven-primary text-haven-primary rounded-full text-sm font-semibold hover:bg-haven-primary hover:text-white transition-all">
              Weaving
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-2 border-2 border-haven-primary text-haven-primary rounded-full text-sm font-semibold hover:bg-haven-primary hover:text-white transition-all">
              Woodworking
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-haven-background">
        <div className="container-responsive">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="card card-hover flex flex-col group overflow-hidden"
              >
                {/* Product Image Area */}
                <div className="bg-gradient-to-br from-haven-secondary to-haven-background h-40 sm:h-48 md:h-56 flex items-center justify-center overflow-hidden relative">
                  <div className="text-6xl sm:text-7xl md:text-8xl transform group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div className="absolute top-3 right-3 bg-haven-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-haven-primary mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-haven-accent mb-2">
                    By {product.seller}
                  </p>

                  <div className="text-yellow-500 text-sm mb-4">
                    {product.rating}
                  </div>

                  <div className="mt-auto pt-4 border-t border-haven-secondary flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-bold text-haven-primary">
                      {product.price}
                    </span>
                    <button className="px-3 py-2 sm:px-4 sm:py-2 bg-haven-accent text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-haven-primary text-haven-background py-12 sm:py-16 md:py-20">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Browse our artisans' profiles to discover custom creations and commission unique pieces tailored to your preferences.
          </p>
          <Link 
            href="/sellers"
            className="inline-block px-8 py-3 bg-haven-secondary text-haven-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
          >
            Meet Our Artisans
          </Link>
        </div>
      </section>
    </div>
  );
}
