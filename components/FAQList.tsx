import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import '../app/globals.css';

interface FAQItem {
  title: string;
  content: string;
}

interface FAQListProps {
  category: { title: keyof typeof faqData }; // Adjusted type
  onSelect: (item: FAQItem) => void;
}

// Dummy data for demonstration
const faqData = {
  'Placing an Order': [
    {
      title: 'Shipping & Returns',
      content:
        'Most orders ship within one business day excluding Japanese holidays. <br /> 30-day return policy for all items.<br />  Handling fees apply to returns for refund. <br /> 1-Year minimum limited warranty on all items.'
    },
    {
      title: 'Warranty Period',
      content:
        "Luxonse offers a standard 1-Year Warranty from the date of shipping covering basic manufacturing defects including moving parts, plating, stone defects, and adhesives on most products purchased directly from Luxonse or from authorized resellers. <br /> Luxonses 1-Year Warranty does not cover the following: <br/> <br/> <ul style='list-style-type: disc; margin-left: 10px;'> <li>Lost items or parts such as stones and clasps. </li>  <li>Physical damage or damage due to normal wear and tear including stretching.  </li> <li> Water damage. </li>  <li> Plating degradation due to exposure to oils, perfumes, soaps or other external elements.  </li> <li> Damage due to improper storage.</li>  <li> Customizations or Modifications done outside of Luxonse </li> </ul> <br /> A copy of the purchase receipt and a photo of the item is required as proof of purchase and to validate this warranty.<br />Please click <b>Send us a Message</b> below to begin a claim."
    },
    { title: 'Payment Methods', content: 'Information about payment methods' },
    { title: 'Is my payment secure?', content: 'Information about payment security' },
    { title: 'When will an item be back in stock?', content: 'Information about item stock' },
    { title: 'Using a discount code', content: 'Information about using discount codes' }
  ],
  'Tracking an Order': [
    { title: 'Lost Package', content: 'add content' },
    {
      title: 'Has my Order Shipped?',
      content:
        'Once an order has shipped, an email with tracking will be sent to the email address provide at the time of the order. '
    }
  ]
};

const FAQList: React.FC<FAQListProps> = ({ category, onSelect }) => {
  const items = faqData[category.title] || [];

  return (
    <ul className="fade-in divide-y divide-gray-100 font-sans">
      <li>
        <div className="px-4 py-4 text-2xl font-extrabold">
          <span className="">{category.title}</span>
        </div>
      </li>
      {items.map((item, index) => (
        <li key={index} className=" hover:bg-gray-100">
          <button
            onClick={() => onSelect(item)}
            className="block w-full px-4 py-4 text-left sm:px-6"
          >
            <div className="flex items-center justify-between">
              <p className="truncate text-sm font-semibold text-gray-700 md:text-lg">
                {item.title}
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
};

export default FAQList;
