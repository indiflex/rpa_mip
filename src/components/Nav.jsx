// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav className='flex items-center justify-between px-2 shadow'>
      <div>
        <h1 className='flex text-2xl font-bold'>
          <BookmarkSquareIcon className='w-8 text-cyan-500' /> Sico Index
        </h1>
      </div>
      <div>
        {/* <MagnifyingGlassCircleIcon className='w-4 absolute h-8' /> */}
        <input type='text' placeholder='search...' className='h-10 w-24' />
      </div>
    </nav>
  );
};
