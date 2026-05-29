import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: "🎨",
      title: "Curated Artistry",
      description: "Handpicked collections from talented artisans around the world."
    },
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Every piece crafted with meticulous attention to detail and care."
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Support independent makers and traditional craftsmanship."
    },
    {
      icon: "💝",
      title: "Unique Finds",
      description: "One-of-a-kind treasures you won't find anywhere else."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-haven-background to-haven-secondary">
        <div className="container-responsive">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-haven-accent text-white rounded-full text-sm font-semibold">
              Welcome to Artisan Marketplace
            </div>
            <h1 className="section-title text-4xl md:text-5xl lg:text-6xl leading-tight">
              Discover <span className="text-haven-accent">Handcrafted</span> Treasures
            </h1>
            <p className="text-lg md:text-xl text-haven-accent mt-6 mb-8">
              Explore unique, beautifully crafted items created by talented artisans from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary text-center">
                Shop Now
              </Link>
              <Link href="/sellers" className="btn-secondary text-center">
                Meet Artisans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Why Choose Handcrafted Haven?</h2>
            <p className="section-subtitle">Quality, authenticity, and artistry in every piece</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card card-hover p-6 sm:p-8 text-center group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-haven-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-haven-text opacity-75">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-haven-primary text-haven-background">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-haven-secondary">
            Ready to Explore?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Browse our collection of artisan-crafted products and meet the talented creators behind each piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="px-8 py-3 bg-haven-secondary text-haven-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-200 text-center"
            >
              Shop Products
            </Link>
            <Link 
              href="/sellers" 
              className="px-8 py-3 border-2 border-haven-secondary text-haven-secondary font-semibold rounded-lg hover:bg-haven-secondary hover:text-haven-primary transition-all duration-200 text-center"
            >
              Explore Artisans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
