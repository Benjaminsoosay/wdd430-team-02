import Link from 'next/link';

const products = [
  {
    id: '1',
    name: 'Handmade Leather Wallet',
    description: 'Premium quality full-grain leather wallet with RFID protection.',
    price: 49.99,
    image: '/products/wallet.svg',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    description: 'Eco-friendly 100% organic cotton t-shirt.',
    price: 29.99,
    image: '/products/tshirt.svg',
    rating: 4.5
  },
  {
    id: '3',
    name: 'Handcrafted Wooden Bowl',
    description: 'Beautiful hand-turned wooden bowl made from sustainable maple wood.',
    price: 65.00,
    image: '/products/bowl.svg',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Artisan Coffee Mug Set',
    description: 'Set of 4 handmade ceramic coffee mugs with unique glazing patterns.',
    price: 39.99,
    image: '/products/mug.svg',
    rating: 4.7
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Artisan Marketplace</h1>
          <p className="text-lg md:text-xl mb-8">Discover unique handcrafted products from talented artisans</p>
          <Link 
            href="/products" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder-product.svg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-xl"></span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <Link 
                    href={"/products/" + product.id}
                    className="mt-3 block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
