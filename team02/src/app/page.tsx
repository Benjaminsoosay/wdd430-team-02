export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-amber-800">Handcrafted Haven</h1>
      <p className="text-lg mt-4">Discover unique handcrafted treasures from talented artisans.</p>
      <div className="mt-8">
        <a href="/products" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 inline-block">
          Shop Now
        </a>
      </div>
    </div>
  );
}
