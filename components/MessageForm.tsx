interface FAQItem {
  title: string;
  content: string;
  onBack: () => void;
}
interface MessageFormProps extends FAQItem {
  item: any;
}

function MessageForm({ title, content, onBack, item }: MessageFormProps) {
  return (
    <div className="fade-in mt-4 bg-white shadow sm:rounded-md">
      <h2 className="px-4 pt-4 text-lg font-bold text-gray-900">{title}</h2>
      <div className="mt-2 w-full border-b-2 border-gray-200"></div>
      <div className="p-4">
        <p className="mt-1 text-sm text-gray-600">Help us with a few details</p>
        <form className="mt-4">
          <div className="mb-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-1 focus:outline-black"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-black"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center rounded-b-md bg-gray-100 p-2">
        <p className="text-sm text-black">Usually replies in a few hours</p>
      </div>
    </div>
  );
}

export default MessageForm;
