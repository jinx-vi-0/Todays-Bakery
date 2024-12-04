interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

export function ProductCard({ name, description, image, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-amber-600 font-semibold">
          {price}
        </div>
      </div>
    </div>
  );
}