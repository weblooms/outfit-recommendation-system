import React from "react";
import { ShoppingBag, ExternalLink, ShoppingCart } from "lucide-react";

interface Item {
  itemName: string;
  description: string;
  searchKeyword: string;
}

interface Props {
  items: Item[];
  onClose: () => void;
}

const PopupModal: React.FC<Props> = ({ items, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4">
      <div className="bg-[#fdf8f5] rounded-2xl shadow-2xl max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh] border-4 border-pink-200 relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-pink-600 text-3xl font-bold hover:text-pink-800 transition"
        >
          &times;
        </button>

        <h2 className="text-2xl text-center font-extrabold text-pink-700 mb-6 tracking-wide">
          🔥 Outfit Suggestions Just for You!
        </h2>

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 mb-6 border border-pink-100 transition hover:shadow-xl"
          >
            <h3 className="text-xl font-bold text-pink-600 mb-1">
              {index + 1}. {item.itemName}
            </h3>
            <p className="text-gray-700 italic mb-3">{item.description}</p>

            <div className="space-y-2">
              <a
                href={`https://www.amazon.in/s?k=${encodeURIComponent(item.searchKeyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-700 font-medium hover:text-green-900"
              >
                <ShoppingCart size={18} /> Amazon: <span className="underline">Search here</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={`https://www.myntra.com/${encodeURIComponent(item.searchKeyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-700 font-medium hover:text-pink-900"
              >
                <ShoppingBag size={18} /> Myntra: <span className="underline">Search here</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={`https://www.flipkart.com/search?q=${encodeURIComponent(item.searchKeyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 font-medium hover:text-blue-900"
              >
                <ShoppingCart size={18} /> Flipkart: <span className="underline">Search here</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupModal;
