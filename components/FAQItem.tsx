interface FAQItemProps {
  item: { title: string; content: string };
  onSendMessage: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, onSendMessage }) => {
  return (
    <div className="fade-in bg-white p-12 shadow sm:rounded-md">
      <h3 className="text-2xl font-medium text-gray-900">{item.title}</h3>
      <br />
      <div className="text-lg" dangerouslySetInnerHTML={{ __html: item.content }} />
      <div className="flex w-full justify-center">
        <button
          onClick={onSendMessage}
          className="mt-6 w-full rounded-md bg-gray-800 px-3 py-2 text-white hover:bg-gray-700"
        >
          Send us a message
        </button>
      </div>
    </div>
  );
};

export default FAQItem;
