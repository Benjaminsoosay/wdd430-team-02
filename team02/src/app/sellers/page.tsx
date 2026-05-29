import Link from "next/link";

const sellers = [
  { 
    id: "seller1", 
    name: "Emily Ceramics", 
    specialty: "Pottery", 
    location: "Portland, OR",
    icon: "🏺",
    bio: "Creating beautiful ceramic pieces with traditional techniques passed down through generations."
  },
  { 
    id: "seller2", 
    name: "Textile Arts", 
    specialty: "Weaving", 
    location: "Asheville, NC",
    icon: "🧵",
    bio: "Hand-woven textiles featuring natural fibers and sustainable craftsmanship."
  },
  { 
    id: "seller3", 
    name: "Woodcraft Co", 
    specialty: "Woodworking", 
    location: "Seattle, WA",
    icon: "🪵",
    bio: "Fine woodworking featuring reclaimed materials and timeless design aesthetics."
  }
];

export default function SellersPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-haven-accent py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <h1 className="section-title text-4xl md:text-5xl text-haven-background">Meet Our Artisans</h1>
          <p className="text-lg md:text-xl text-have-background mt-4 opacity-90">
            Discover the talented creators behind our beautiful collection
          </p>
        </div>
      </section>

      {/* Sellers Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-haven-background">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sellers.map((seller) => (
              <Link 
                key={seller.id} 
                href={`/sellers/${seller.id}`}
                className="card card-hover overflow-hidden group"
              >
                {/* Avatar Section */}
                <div className="bg-haven-secondary px-6 py-8 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center text-5xl sm:text-6xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 mb-4">
                    {seller.icon}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-haven-primary text-center uppercase tracking-wider">
                    {seller.specialty}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-haven-primary mb-3">
                    {seller.name}
                  </h2>
                  <p className="text-sm sm:text-base text-haven-text opacity-75 mb-4">
                    {seller.bio}
                  </p>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-haven-accent mb-6 pb-6 border-b border-haven-secondary">
                    <span>📍</span>
                    <span>{seller.location}</span>
                  </div>
                  <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-haven-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
                    View Profile
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-haven-primary text-haven-background py-12 sm:py-16 md:py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">3</div>
              <p className="text-sm sm:text-base opacity-90">Featured Artisans</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-sm sm:text-base opacity-90">Products Available</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <p className="text-sm sm:text-base opacity-90">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
