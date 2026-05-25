import Link from "next/link";

const sellers = [
  { id: "seller1", name: "Emily Ceramics", specialty: "Pottery", location: "Portland, OR" },
  { id: "seller2", name: "Textile Arts", specialty: "Weaving", location: "Asheville, NC" },
  { id: "seller3", name: "Woodcraft Co", specialty: "Woodworking", location: "Seattle, WA" }
];

export default function SellersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-800 mb-8">Meet Our Artisans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <a key={seller.id} href={`/sellers/${seller.id}`} className="border rounded-lg p-6 hover:shadow-lg block">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-4">??</div>
            <h2 className="font-semibold text-xl">{seller.name}</h2>
            <p className="text-amber-600">{seller.specialty}</p>
            <p className="text-gray-500 text-sm">?? {seller.location}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
