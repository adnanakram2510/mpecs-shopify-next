import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="">
      <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out hover:scale-110 ', className)}
      />

      {quantity ? (
        <div className="bg-#3E3D3D absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
