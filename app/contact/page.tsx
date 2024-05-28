import { Inter } from 'next/font/google';
import ContactForm from './ContactForm';
const inter = Inter({ subsets: ['latin'] });

const contact = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] py-4 text-black">
        <div className={inter.className}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default contact;
