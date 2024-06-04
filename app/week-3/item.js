export default function Item({ name, quantity, category }) {
    return (
      <li className="p-4 mb-4 bg-blue-600 text-white rounded-lg shadow-md">
        <p className="font-semibold text-xl">{name}</p>
        <p className="text-sm text-gray-200">Buy {quantity} in {category}</p>
      </li>
    );
  }
  