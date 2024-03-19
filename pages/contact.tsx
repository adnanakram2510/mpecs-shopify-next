import Footer from 'components/footer';
import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';

const inter = Inter({ subsets: ['latin'] });

const contact = () => {
  return (
    <div className="bg-black text-white">
      <div className={inter.className}>
        <div className="flex flex-col pt-12 md:flex-row">
          <div className="flex-1 pb-10 pl-10 pr-10 pt-2">
            <h1 className="fade-in4 mb-4 text-6xl font-medium">Contact</h1>
            <p className="fade-in4 mb-10 text-xl text-gray-500">Email us for any Inquiries.</p>
            <div className="mb-6">
              <h2 className="fade-in4 mb-4 text-2xl font-semibold">INQUIRY FORM</h2>
              <input
                type="text"
                placeholder="NAME"
                className="fade-in41 mb-4 w-full bg-[#141414] p-4 text-white md:mr-9 md:w-[47%] 2xl:mr-16"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="fade-in42 mb-4 w-full bg-[#141414] p-4 text-white md:w-[47%]"
              />
              <textarea
                placeholder="MESSAGE"
                className="fade-in43 mb-4 w-full bg-[#141414] p-4 text-white"
                rows={4}
              ></textarea>
              <button className="fade-in44 w-full bg-white p-4 text-black">SEND EMAIL</button>
            </div>
          </div>
          <div className="fade-in4 relative mb-10 flex pl-10 pr-10">
            <div className="mt-14 -translate-y-12 overflow-hidden rounded-3xl bg-gray-800">
              <div className="h-auto w-full md:h-[560px] md:w-[650px]">
                <img
                  src="./mpecs.png"
                  alt="Abstract art with purple and blue curves on a textured background"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
