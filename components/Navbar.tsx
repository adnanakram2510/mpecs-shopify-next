import { Suspense } from 'react';
import NavMenu from '../components/NavMenu';
import Cart from '../components/cart';
import OpenCart from '../components/cart/open-cart';
import Search from './layout/navbar/search';

const Navbar = () => {
  return (
    <div
      id="navbarContent"
      className="font-lato flex items-center justify-between bg-white px-4 py-4 text-black"
    >
      <div className="flex flex-1 items-center justify-start">
        <NavMenu />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <a href="/">
          <img src="./mpecs.png" className="mt-1 max-h-12 w-auto" />
        </a>
      </div>
      {/* <div className="hidden md:flex md:w-1/3">
          <Search />
        </div> */}
      <div className="mr-1 flex flex-1 items-center justify-end space-x-4 text-sm md:mr-0">
        <Search />
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
