"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const sellers = {
  "seller1": { 
    id: "seller1", 
    name: "Emily Ceramics", 
    location: "Portland, OR", 
    bio: "Potter with 10 years of experience creating beautiful ceramics.", 
    story: "I started making pottery in my garage during college and fell in love with the craft. Now I run a full ceramics studio and love connecting with customers who appreciate handmade art.",
    icon: "🏺"
  },
  "seller2": { 
    id: "seller2", 
    name: "Textile Arts", 
    location: "Asheville, NC", 
    bio: "Creating beautiful woven and textile art with natural fibers.", 
    story: "Textiles run in my family. My grandmother taught me to weave traditional patterns, which I now blend with modern designs.",
    icon: "🧵"
  },
  "seller3": { 
    id: "seller3", 
    name: "Woodcraft Co", 
    location: "Seattle, WA", 
    bio: "Artisan woodworking with sustainable, reclaimed materials.", 
    story: "Woodworking is my meditation. Every piece tells a story through its grain and finish.",
    icon: "🪵"
  }
};

const sellerProducts = {
  "seller1": [
    { id: "1", name: "Handmade Ceramic Mug", price: 35, icon: "🏺" },
    { id: "4", name: "Ceramic Mug Set", price: 65, icon: "🏺" }
  ],
  "seller2": [
    { id: "2", name: "Woven Wall Hanging", price: 65, icon: "🧵" },
    { id: "5", name: "Hand-woven Scarf", price: 95, icon: "🧵" }
  ],
  "seller3": [
    { id: "3", name: "Wooden Cutting Board", price: 45, icon: "🪵" },
    { id: "6", name: "Wooden Jewelry Box", price: 110, icon: "🪵" }
  ]
};

export default function SellerDetailPage() {
  const params = useParams();
  const sellerId = typeof params.id === 'string' ? params.id : params.id?.[0];
  const seller = sellerId ? sellers[sellerId as keyof typeof sellers] : null;
  const products = sellerId ? (sellerProducts[sellerId as keyof typeof sellerProducts] || []) : [];

  if (!seller) {
    return (
      <div className="container-responsive py-20 text-center">
        <h1 className="text-3xl font-bold text-haven-primary mb-4">Seller not found</h1>
        <Link href="/sellers" className="btn-primary">
          Back to Artisans
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-haven-accent py-12 sm:py-16 md:py-20">
        <div className="container-responsive text-center text-haven-background">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center text-6xl sm:text-7xl md:text-8xl mx-auto mb-6 shadow-lg">
            {seller.icon}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">{seller.name}</h1>
          <p className="text-lg opacity-90">📍 {seller.location}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-haven-background">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Bio Sidebar */}
            <div className="md:col-span-1">
              <div className="card p-6 sm:p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-haven-primary mb-4">About</h2>
                <p className="text-haven-text opacity-75 mb-6">{seller.bio}</p>

                <div className="border-t border-haven-secondary pt-6">
                  <h3 className="font-bold text-haven-primary mb-3">My Story</h3>
                  <p className="text-haven-text opacity-75 text-sm leading-relaxed">{seller.story}</p>
                </div>

                <button className="w-full mt-6 btn-primary text-center">
                  Contact Artisan
                </button>
              </div>
            </div>

            {/* Products */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="section-title text-3xl md:text-4xl mb-2">Featured Works</h2>
                <p className="text-lg text-haven-accent">Browse {seller.name}'s latest creations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="card card-hover overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-haven-secondary to-haven-background h-40 md:h-48 flex items-center justify-center text-5xl md:text-6xl">
                      {product.icon}
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-haven-primary mb-2">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-bold text-haven-accent">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 p-6 sm:p-8 bg-haven-secondary bg-opacity-20 rounded-lg border-2 border-haven-secondary">
                <p className="text-center text-haven-text">
                  Want a custom piece? <span className="font-bold">Contact {seller.name}</span> to commission your unique creation.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-haven-secondary pt-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-haven-primary mb-2">10+</div>
              <p className="text-haven-accent font-semibold">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-haven-primary mb-2">500+</div>
              <p className="text-haven-accent font-semibold">Items Created</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-haven-primary mb-2">★★★★★</div>
              <p className="text-haven-accent font-semibold">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}