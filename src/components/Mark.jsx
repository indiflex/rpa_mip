import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export const Mark = ({ mark }) => {
  return (
    <div className='box-border border-2 border-cyan-400 mb-1'>
      <div>
        <img
          src={mark.image}
          alt={mark.title}
          className='max-h-[100px] w-full'
        />
      </div>
      <h3 className='text-slate-700 font-medium m-1'>{mark.title}</h3>
      <p className='text-sm text-gray-500 m-1'>{mark.description}</p>
      <div className='flex item-center justify-end mr-3'>
        <button className='bg-cyan-400 rounded-full p-2 mb-1 mr-1 hover:bg-cyan-500'>
          <PencilSquareIcon className='h-4 text-white' />
        </button>
        <button className='bg-rose-400 rounded-full p-2 mb-1 hover:bg-rose-500'>
          <TrashIcon className='h-4 text-white' />
        </button>
      </div>
    </div>
  );
};
