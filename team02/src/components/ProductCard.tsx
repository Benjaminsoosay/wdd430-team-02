import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  artisan: string;
  image: string;
};

export default function ProductCard({
  title,
  description,
  price,
  artisan,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">

      {/* Product Image */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Artisan */}
        <p className="text-sm text-green-700 font-medium mb-1">
          By {artisan}
        </p>

        {/* Product Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between">

          {/* Price */}
          <span className="text-xl font-bold text-blue-700">
            {price}
          </span>

          {/* Button */}
          <button
            aria-label={`View ${title}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors duration-300 cursor-pointer"
          >
            View Item
          </button>

        </div>
      </div>
    </div>
  );
}