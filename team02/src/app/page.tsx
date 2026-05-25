import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { reviewDB } from "@/lib/db/reviews";
import ReviewForm from "@/components/ReviewForm";

const products = [
  {
    title: "Handmade Clay Vase",
    description:
      "Beautiful handcrafted pottery vase inspired by traditional African artistry.",
    price: "$45",
    artisan: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Beaded Necklace",
    description:
      "Colorful handmade jewelry crafted with care and cultural inspiration.",
    price: "$25",
    artisan: "Maya Bello",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Carved Wooden Bowl",
    description:
      "Elegant handmade wooden bowl carved from natural hardwood by skilled artisans.",
    price: "$48",
    artisan: "Daniel Mensah",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {

  const reviews = reviewDB.getByProductId("1");

  return (
    <main className="max-w-7xl mx-auto px-5 py-10 bg-haven-background min-h-screen">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Featured Handmade Creations
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            artisan={product.artisan}
            image={product.image}
          />
        ))}
      </div>

      {/* Reviews Section */}
      <section className="mt-16 bg-gray-50 p-6 rounded-3xl">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Customer Reviews
        </h2>

        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>
<div className="mt-10">
  <ReviewForm />
</div>
      </section>

    </main>
  );
}