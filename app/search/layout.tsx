import Footer from 'components/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first mt-12 w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last mt-12 min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none mt-12 flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}
