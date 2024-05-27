'use client';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const test = 1;
  const [quantity, setQuantity] = React.useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const stock = 0;
  if (test) {
    return (
      <>
        <div className="font-lato max-w-md pl-16 pr-16 md:mt-16 md:pl-0 md:pr-24">
          <h1 className="md:text-md mb-4 mt-[10px] text-sm font-extralight tracking-widest text-[#FFFFFF]">
            MPECS
          </h1>
          <h2 className="mb-4 text-xl font-normal uppercase tracking-widest text-white">
            {product.title}
          </h2>
          <div className="mb-8 flex items-center text-xl tracking-wide text-white">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>

          <div className="mb-[16px] mt-[16px] h-[1px] bg-[#333333]"></div>

          <div className="mb-8 flex items-center">
            <i className="fab fa-facebook-f mr-4"></i>
            <i className="fab fa-twitter mr-4"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
          <VariantSelector options={product.options} variants={product.variants} />
          {/* <div className="flex items-center mb-8">
            <div className="bg-black border border-gray-700 text-white flex">
              <button className="p-2" onClick={decreaseQuantity}>-</button>
              <input type="text" className="p-2 w-12 text-center quantity-input bg-black" value={quantity} readOnly />
              <button className="p-2" onClick={increaseQuantity}>+</button>
            </div>
          </div> */}
          {/* <button className="bg-transparent border border-[#3E3D3D] text-[#FFFFFF] w-full py-4 mb-4 tracking-widest">ADD TO CART</button> */}
          {stock === (1 as number) ? (
            <>
              <div className="mb-8 flex items-center justify-center">
                <button
                  className="mb-4 w-full border border-[#3E3D3D] bg-transparent py-4 tracking-widest text-[#FFFFFF]"
                  disabled
                >
                  OUT OF STOCK
                </button>
                <button className="mb-4 ml-4 bg-[#3E3D3D] px-4 py-4" data-tip data-for="notifyTip">
                  <FaBell className="text-white" />
                </button>
                {/* <ReactTooltip id="notifyTip" place="top" effect="solid">
                  Get a notification when item is in stock
                </ReactTooltip> */}
              </div>
            </>
          ) : (
            <>
              <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            </>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
          <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        </div>
        <VariantSelector options={product.options} variants={product.variants} />
        {product.descriptionHtml ? (
          <Prose
            className="mb-6 text-sm leading-tight dark:text-white/[60%]"
            html={product.descriptionHtml}
          />
        ) : null}

        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </>
    );
  }
}
