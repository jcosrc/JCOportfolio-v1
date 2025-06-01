import { useState } from "react";

export default function DetailCard({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex flex-col-reverse items-center">
      <div className="flex gap-4 flex-wrap justify-center w-1/3 h- h-1/3 outline outline-red-500">
        {items.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            onClick={() => setSelectedItem(item)}
            className="w-32 h-32 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition"
          />
        ))}
      </div>

      {selectedItem && (
        <div className=" p-6 shadow-xl rounded-lg max-w-md w-full transition-all duration-300 border">
          <h2 className="text-xl font-semibold mb-2">{selectedItem.title}</h2>
          <p className="text-pallete-white">{selectedItem.description}</p>
          <button
            onClick={() => setSelectedItem(null)}
            className="mt-4 text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
