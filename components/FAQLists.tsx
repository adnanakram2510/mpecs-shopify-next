import { MdKeyboardArrowRight } from 'react-icons/md';

function FAQLists({ onSelect }: { onSelect: (category: { id: number; title: string }) => void }) {
  const categories = [
    { id: 1, title: 'Placing an Order' },
    { id: 2, title: 'Tracking an Order' }
  ];

  return (
    <ul className="fade-in divide-y divide-gray-200 font-sans">
      <div className="px-4 py-4 font-bold">
        <span className="text-2xl">Orders & Returns</span>
        <div className="py-4 text-lg font-medium">
          Information on how to place and track an order.
        </div>
      </div>

      {categories.map((category, index) => (
        <li key={index} className="hover:bg-gray-100">
          <button
            onClick={() => onSelect(category)}
            className="block w-full px-4 py-4 text-left sm:px-6"
          >
            <div className="flex items-center justify-between">
              <p className="truncate text-sm font-semibold tracking-wide text-black md:text-lg">
                {category.title}
              </p>
              <div className="ml-2 flex flex-shrink-0">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FAQLists;
