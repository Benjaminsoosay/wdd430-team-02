"use client";
import { useParams } from "next/navigation";

const products = {
  "1": { id: "1", name: "Handmade Ceramic Mug", price: 35, description: "Beautiful hand-thrown ceramic mug with earthy glaze.", seller: "Emily Ceramics", sellerId: "seller1" },
  "2": { id: "2", name: "Woven Wall Hanging", price: 65, description: "Macrame wall hanging made with natural cotton fibers.", seller: "Textile Arts", sellerId: "seller2" },
  "3": { id: "3", name: "Wooden Cutting Board", price: 45, description: "Handcrafted bamboo cutting board with juice groove.", seller: "Woodcraft Co", sellerId: "seller3" }
};

export default function ProductDetailPage() {
  const params = useParams();
  const product = products[params.id];

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-96 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-6xl">📷</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-amber-800">{product.name}</h1>
          <p className="text-2xl text-amber-700 font-bold mt-2">${product.price}</p>
          <p className="text-gray-600 mt-4">by {product.seller}</p>
          <p className="mt-4">{product.description}</p>
          <button className="mt-6 bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 w-full">
            Add to Cart
          </button>
          <a href={`/sellers/${product.sellerId}`}>
            <button className="mt-3 border border-amber-600 text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 w-full">
              Visit Seller Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}