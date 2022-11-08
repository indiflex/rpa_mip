import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export const Mark = ({ mark }) => {
  return (
    <div className='mb-1 box-border border-2 border-cyan-400'>
      <div>
        <img
          src={mark.image}
          alt={mark.title}
          className='max-h-[100px] w-full'
        />
      </div>
      <h3 className='m-1 font-medium text-slate-700'>{mark.title}</h3>
      <p className='m-1 text-sm text-gray-500'>{mark.description}</p>
      <div className='item-center mr-3 flex justify-end'>
        <button className='mb-1 mr-1 rounded-full bg-cyan-400 p-2 hover:bg-cyan-500'>
          <PencilSquareIcon className='h-4 text-white' />
        </button>
        <button className='mb-1 rounded-full bg-rose-400 p-2 hover:bg-rose-500'>
          <TrashIcon className='h-4 text-white' />
        </button>
      </div>
    </div>
  );
};
