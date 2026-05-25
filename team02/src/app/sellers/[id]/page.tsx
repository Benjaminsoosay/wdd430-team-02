"use client";
import { useParams } from "next/navigation";

const sellers = {
  "seller1": { id: "seller1", name: "Emily Ceramics", location: "Portland, OR", bio: "Potter with 10 years of experience.", story: "I started making pottery in my garage." },
  "seller2": { id: "seller2", name: "Textile Arts", location: "Asheville, NC", bio: "Creating beautiful woven art.", story: "Textiles run in my family." },
  "seller3": { id: "seller3", name: "Woodcraft Co", location: "Seattle, WA", bio: "Handcrafted wood pieces.", story: "Woodworking is my meditation." }
};

const sellerProducts = {
  "seller1": [{ id: "1", name: "Handmade Ceramic Mug", price: 35 }],
  "seller2": [{ id: "2", name: "Woven Wall Hanging", price: 65 }],
  "seller3": [{ id: "3", name: "Wooden Cutting Board", price: 45 }]
};

export default function SellerDetailPage() {
  const params = useParams();
  const seller = sellers[params.id];
  const products = sellerProducts[params.id] || [];

  if (!seller) {
    return <div className="text-center py-20">Seller not found</div>;
  }

  return (
    <div>
      <div className="h-48 bg-amber-700 flex items-center justify-center text-white text-center">
        <div>
          <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-3xl">🎨</div>
          <h1 className="text-2xl font-bold mt-2">{seller.name}</h1>
          <p>{seller.location}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-2">Bio</h2>
              <p>{seller.bio}</p>
              <h3 className="font-semibold mt-4 mb-2">My Story</h3>
              <p className="text-gray-600 text-sm">{seller.story}</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => (
                <a key={product.id} href={`/products/${product.id}`} className="border rounded-lg p-4 hover:shadow-lg block">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-amber-700 font-bold">${product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}